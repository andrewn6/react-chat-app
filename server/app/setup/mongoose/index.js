const mongoose = require('mongoose');
const bluebird = require('bluebird');
const constants = require('modules/constants');

module.exports = () => {
  const URI = constants.MONGOOSE.URL + constants.MONGOOSE.DB;

  const MONGOOSE_OPTIONS = {
    useNewUrlParser: true,
    auto_reconnect: true
  };

  mongoose.Promise = bluebird;
  mongoose.connect(URI, MONGOOSE_OPTIONS);

  mongoose.connection('connected', () => {
    console.log('Mongoose: Started');
  });
};