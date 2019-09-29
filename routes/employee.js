'use strict';
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Employee = require('../models/Employees');
// It's fine to use an in memory 'database'
// const DATABASE = {};
// Get employees
router.get('/', function (req, res) {
    Employee.find({})
        .then(function (dbEmployee) {
        console.log(dbEmployee);
        res.status(200).json(dbEmployee);
    })["catch"](function (err) {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
    // return res.send(DATABASE);
});
router.post('/', function (req, res, next) {
    var employee = new Employee({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name
    });
    employee.save().then(function (result) {
        console.log(result);
        res.status(200).json({
            message: "Post works",
            DATABASE: employee
        });
    })["catch"](function (err) {
        console.log(err);
    });
});
router.patch('/:employeeId', function (req, res, next) {
    var id = req.params.employeeId;
    Employee.update({ _id: id }, { $set: { name: req.body.newName } })
        .then(function (result) {
        res.status(200).json(result);
    })["catch"](function (err) {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
    res.status(200).json({
        message: "Employees Updated"
    });
});
router["delete"]("/:employeeId", function (req, res, next) {
    var id = req.params.employeeId;
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
