  
const express = require('express');

const { Router } = require('express')

const route = Router();

// Success /api says success (200)
route.get('/', (req, res) => {
	res.status(200)
		.json({
			success: true
		});
});

module.exports = route;