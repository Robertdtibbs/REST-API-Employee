'use strict';

const express = require('express');
const router = express.Router();

// It's fine to use an in memory 'database'
const DATABASE = {};

// Get employees
router.get('', function(req, res) {
  res.status(200).json({
    message: "Get Works"
  })
  // return res.send(DATABASE);
});

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: "Post works"
  })
})

router.patch('/', (req, res, next) => {
  res.status(200).json({
    message: "Employees Updated"
  })
})

router.delete("/", (req, res, next) => {
  res.status(201).json({
    message: "Employee Deleted"
  })
})


module.exports = router;
