'use strict';

export {}

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Employee = require('../models/Employees')

// It's fine to use an in memory 'database'
// const DATABASE = {};

// Get employees
router.get('/', function(req, res) {
  Employee.find({})
    .then(dbEmployee => {
      console.log(dbEmployee);
      res.status(200).json(dbEmployee)
    }).catch( err => {
      console.log(err);
      res.status(500).json({
        error: err
      })
    })
  // return res.send(DATABASE);
});

router.post('/', (req, res, next) => {
  const employee = new Employee({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name
  });
  employee.save().then(result => {
    console.log(result);
    res.status(200).json({
      message: "Post works",
      DATABASE: employee
    })
  }).catch(err =>{
    console.log(err)
  })
})

router.patch('/:employeeId', (req, res, next) => {
  const id = req.params.employeeId;
  Employee.update({_id: id}, {$set: {name: req.body.newName}})
    .then(result => {
      res.status(200).json(result)
    }).catch( err => {
      console.log(err);
      res.status(500).json({
        error: err
      })
    })
  res.status(200).json({
    message: "Employees Updated"
  })
})

router.delete("/:employeeId", (req, res, next) => {
  const id = req.params.employeeId
  Employee.remove({_id: id})
    .then(result => {
      res.status(200).json(result)
    }).catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      })
    })
})


module.exports = router;
