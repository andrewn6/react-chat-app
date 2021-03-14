const {
  check
} = require('express-validator/check');

const {
  findUser
} = require('repositories/user');

const constants = require('modules/constants');

module.exports.signupValidator = () => [
  check('nickname')
    .isLength({ min:3, max: 14})
    .withMessage(constants.EXPRESS_VALIDATION_MESSAGES.NICKNAME_LENGHT_BETWEEN_2_AND_12)
];