import { fetch } from 'whatwg-fetch';

import { toast } from 'react-toastify';

import Cookies from 'js-cookie';
import constants from '../constants';
import queryString from 'querystring';
import history from 'react-router/history';
import store from 'redux/store';
import _ from 'lodash';
import moment from 'moment';
import * as socketActions from 'redux/actions/socket';
import * as mainActions from 'redux/actions/main';

export function isDevelopmentEnv () {
  return process.env.NODE_ENV.toLowerCase() === 'development'
}

export function setCookie(key, value, expires) {
  return Cookies.set(key, value, {expires});
}

export function removeCookie(key) {
  return Cookies.remove(key);
}

export function getCookieJson (key) {
  return Cookies.getJSON(key);
}

export function getCookie (key) {
  return Cookies.get(key)
}

export function setToken (value) {
  return setCookie(constants.GLOBAL.TOKEN_COOKIE_KEY, value, constants.GLOBAL.TOKEN_COOKIE_EXPIRES)
}