'use strict';
exports.__esModule = true;
var express = require('express');
var employeeRoutes = require('./routes/employee');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var port = parseInt(process.env.PORT || '3000');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/employees', employeeRoutes);
mongoose.connect("mongodb://localhost/RESTAPI", { useNewUrlParser: true, useUnifiedTopology: true });
// Catch all 404
app.use(function (req, res) {
    res.status(404).send('Not found');
});
// Start the server
app.listen(port, function () {
    console.log("Server is listening on port " + port);
});
module.exports = app;
