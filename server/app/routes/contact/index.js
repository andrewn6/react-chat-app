const {
  postAddContact,
  getContact,
  deleteContact
} = require('controllers/contact');

const {
  addContactValidator
} = require('validators/contact');

const express = require('express');

const { Router } = express;

const route = Router();

route.post('/secured/contact', addContactValidator(), postAddContact);
route.get('/secured/contact', getContact);
route.delete('/secured/contact', deleteContact);

module.exports = route;