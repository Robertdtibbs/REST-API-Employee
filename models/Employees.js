"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// All data required to add new employee
var EmployeeSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
  
});
var Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;
