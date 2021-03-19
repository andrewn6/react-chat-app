const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const constants = require('../modules/constants');

exports.encryptPassword = password => crypto 
  .createHmac(constants.CRYPTO.HASH, constants.CRYPTO.SECRET)
  .update(password)
  .digest(constants.CRYPTO.DIGEST);

exports.createJwtToken = model => jwt.sign(model, constants.GENERAL._JWT_SECRET,) {
  expiresIn: constants.GENERAL.JWTEXPIRES_IN
});

export.ConvertErrorToFrontFormat = errors => _.mapValues(errors, model, => model.msg);