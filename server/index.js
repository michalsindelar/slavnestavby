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

const STRUCTURES_INDEX = 'structures2';
const ARCHITECTS_INDEX = 'new_architects';

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
	(data) => {
	  const out = [];
	  for (var key of Object.keys(data))
	  {
			if (!data[key]) {
				continue;
			}

		  if (!data[key]['id']) {
			  data[key]['id'] = parseInt(key);
		  }
		  out.push(data[key]);
	  }


	  return out;
	},
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
  R.prop("photo", structure) &&
  R.path(["address", "lat"], structure) &&
  R.path(["address", "lon"], structure)

app.get('/getStructures', function (req, res) {
  cachedApiRequest(
    res,
	STRUCTURES_INDEX,
    isStructureActive,
    x =>
	{
		const obj =  Object.assign(
			{},
			x,
			{photo: x.photo},
			{photos: (x.photos || []).map(photo => photo.photo || false).filter((photoUrl) => photoUrl ? true : false )},
			{style: x.style || "normal"},
			{type: x.type || "bez typu"}
		);

		if (obj.architect) {
			obj['architect_ids'] = [
				parseInt(R.last(obj.architect.split("/")))
			];
		}

		return obj;
	}
  )
});

app.get('/getArchitects', function (req, res) {

  cachedApiRequest(res, ARCHITECTS_INDEX)
});

app.get('/getBooks', function (req, res) {
  cachedApiRequest(res, 'books')
});

app.get('/getStructureLists', function (req, res) {
	cachedApiRequest(res, 'structure_lists', (item) => !!item.active, item => {
		item.structures = item.structures.map((obj) => {
			const structureId = parseInt(R.last(obj.structure.split("/")));

			if (!structureId) {
				return null;
			}

			delete obj.structure;

			return {
				obj.customIcon,
				structureId,
			}
		}).filter((obj) => !!obj);

		return item;
	})
});

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../app/build')));


// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../app/build', 'index.html'));
});