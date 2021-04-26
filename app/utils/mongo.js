'use strict';

const Mongo = require('@pick-star/cli-mongodb');

const { mongodbURL, mongoDbName } = require('../../config/db');

function mongo() {
  return new Mongo(mongodbURL, mongoDbName);
}

module.exports = mongo;
