'use strict';

export {}

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Employee = require('../models/Employees');
// It's fine to use an in memory 'database'
// const DATABASE = {};

// Get employees
router.get('/', function (req, res) {
    Employee.find({})
        .select("name position age _id")
        .then(function (dbEmployee) {
        console.log(dbEmployee);
        const display = {
          employeeCount: dbEmployee.length,
          employees: dbEmployee
        }
        return res.status(200).json(display);
    })["catch"](function (err) {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });;
  });

// Add new employee (name, position, age)
router.post('/', function (req, res, next) {
    let employee = new Employee({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        position: req.body.position,
        age: req.body.age
    });
    employee.save().then(function (result) {
        console.log(result);
        res.status(200).json({
            message: "Post works",
        });
    })["catch"](function (err) {
        console.log(err);
    });
});

// Amend employee data [{"propName": "name or position or age", "value": "Teacher"}]
router.patch('/:employeeId', function (req, res, next) {
    let id = req.params.employeeId;
    const updateEmp ={};
    for (const emp of req.body) {
        updateEmp[emp.propName] = emp.value;
    }
    Employee.update({ _id: id }, { $set: updateEmp })
        .then(function (result) {
        res.status(200).json(result);
    })["catch"](function (err) {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

// Delete employee - targets employee by id and deletes all data
router["delete"]("/:employeeId", function (req, res, next) {
    let id = req.params.employeeId;
    Employee.remove({ _id: id })
        .then(function (result) {
        res.status(200).json(result);
    })["catch"](function (err) {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});
module.exports = router;

