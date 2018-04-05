const express = require('express');
const path = require('path');
const fs = require('fs');
const NodeCache = require('node-cache');
const R = require('ramda');
const firebase = require('firebase');

const config = require('../config').default

const ApisCache = new NodeCache();

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});

// Firebase connect
// ===

console.log("Config in Server", config)
firebase.initializeApp(config);
const db = firebase.database()


// Formatters
// ===
const limitResults = R.compose(
  R.prop('data')
)

// Helper for cached api requests
// ===

const formatPhotoUrl = (id, oldPath) => {
  // http://slavnestavby.cz/aplikace/files/photo/users/havlicek1/20170116/trmalova-vila_mensi.jpg
  // http://slavnestavby.cz/static/stavby/images/structures/1/TrmalovaVIla%20(1).jpg
  return `http://slavnestavby.cz/static/stavby/images/structures/${id}/${R.last(oldPath.split("/"))}`
}


const cachedApiRequest = (res, key, filterFnc = () => true, mapFunc = R.identity) =>  {
  res.set('Content-Type', 'application/json');

  const formatter = R.compose(
    R.map(mapFunc),
    R.filter(filterFnc)
  )

  try {
    // Data already cached
    res.send(formatter(ApisCache.get(key, true)))
    console.log("Data cached")
  } catch (e) {
    console.log("Data initialized")
    // Not cached / needs update
    db
      .ref(`${key}/`)
      .once('value')
      .then(snapshot => {
        const data = formatter(snapshot.val())

        ApisCache.set(key, data)
        res.send(data)
      })
      .catch(res.send)
  }
}

// Set cors headers<x
// ===
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Apis
// ===

const isStructureActive = structure =>
  R.prop("active", structure) &&
  R.path(["address", "lat"], structure) &&
  R.path(["address", "lon"], structure)

app.get('/getStructures', function (req, res) {
  cachedApiRequest(
    res,
    'structures',
    isStructureActive,
    x =>
      Object.assign(
        {},
        x,
        { photo: formatPhotoUrl(x.id, x.photo) },
        { photos: (x.photos || []).map(photoUrl => formatPhotoUrl(x.id, photoUrl)) },
        { style: x.style || "normal" },
        { type: x.type || "bez typu" }
      )
  )
});

app.get('/getArchitects', function (req, res) {
  cachedApiRequest(res, 'architects')
});

app.get('/getBooks', function (req, res) {
  cachedApiRequest(res, 'books')
});

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../app/build')));


// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../app/build', 'index.html'));
});