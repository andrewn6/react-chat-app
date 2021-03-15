const setupServer = require('server/index');
const setupMongoose = require('setup/mongoose');

module.exports = (app) => {
  setupServer(app);
  setupMongoose();
};