'use strict';
exports.__esModule = true;
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
        var display = {
            employeeCount: dbEmployee.length,
            employees: dbEmployee
        };
        return res.status(200).json(display);
    }).catch(function (err) {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
    ;
});
// Add new employee (name, position, age)
router.post('/', function (req, res, next) {
    var employee = new Employee({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        position: req.body.position,
        age: req.body.age
    });
    employee
        .save()
        .then(function (result) {
            console.log(result);
            res.status(200).json({
                message: "Post works"
        });
    }).catch(function (err) {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});
// Amend employee data [{"propName": "name or position or age", "value": "Teacher"}]
router.patch('/:employeeId', function (req, res, next) {
    var id = req.params.employeeId;
    var updateEmp = {};
    for (var _i = 0, _a = req.body; _i < _a.length; _i++) {
        var emp = _a[_i];
        updateEmp[emp.propName] = emp.value;
    }
    Employee
        .updateOne({ _id: id }, { $set: updateEmp })
        .then(function (result) {
        res.status(200).json(result);
    }).catch(function (err) {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});
// Delete employee - targets employee by id and deletes all data
router["delete"]("/:employeeId", function (req, res, next) {
    var id = req.params.employeeId;
    Employee.remove({ _id: id })
        .then(function (result) {
        res.status(200).json(result);
    }).catch(function (err) {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});
module.exports = router;
