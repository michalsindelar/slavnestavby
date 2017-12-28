const express = require('express');
const path = require('path');
const fs = require('fs');
const NodeCache = require('node-cache');
const R = require('ramda');

const ApisCache = new NodeCache();

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});

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
  return oldPath.replace("aplikace/files/photo/users/havlicek1/20170116/", `static/stavby/images/structures/${id}/`)
}

const cachedApiRequest = (res, key) =>  {
  res.set('Content-Type', 'application/json');
  let data

  try {
    data = ApisCache.get(key, true);
  } catch (e) {
    // Not cached / needs update
    ApisCache.set(key, fs.readFileSync(path.resolve(__dirname, `../fixtures/${key}.json`)));
    data = ApisCache.get(key)
  } finally {

    const formattedData = limitResults(JSON.parse(data))
      .filter(R.prop("active"))
      .map(x => Object.assign({}, x, { photo: formatPhotoUrl(x.id, x.photo) }, { photos: x.photos.map(photoUrl => formatPhotoUrl(x.id, photoUrl)) }))

    res.send(formattedData)
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
app.get('/getStructures', function (req, res) {
  cachedApiRequest(res, 'structures')
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