const setupServer = require('setup/server');
const setupMongoose = require('setup/mongoose');

module.exports = (app) => {
  setupServer(app);
  setupMongoose();
};