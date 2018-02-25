let config = {};

try {
  config = require('./db/config.json');
} catch (e) {
  config = process.env
}

module.exports.default = config;
