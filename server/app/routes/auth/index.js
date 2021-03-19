const {
  postSignUp,
  postSignIn,
  getVerifyNickname
} = require('../../controllers/auth');

const { signupValidator } = require('../../validators/auth');

const express = require('express');

const { Router } = express;

const route = Router();

route.post('/auth/signup', signupValidator(), postSignUp);
route.post('/auth/signin', postSignIn);
route.get('/auth/verify-nickname', getVerifyNickname);

module.exports = route;