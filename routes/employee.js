'use strict';

const express = require('express');
const router = express.Router();

// It's fine to use an in memory 'database'
const DATABASE = {};

// Get employees
router.get('', function(req, res) {
  return res.send(DATABASE);
});


module.exports = router;
