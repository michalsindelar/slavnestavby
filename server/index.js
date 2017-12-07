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
const formatter = R.identity

// Helper for cached api requests
// ===
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
    res.send(data)
  }
}

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