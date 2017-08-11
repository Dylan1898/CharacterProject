var express = require("express");

var app = express();
var bp = require("body-parser")
var fs = require('fs');
var path = require('path')
var api = require('./api')
var single= require('./single.ctrl')
var role = require('./role.ctrl')
var all= require('./all.ctrl')
var jsonPath = path.join(__dirname, 'data.json');
// app.use(express.static(clientPath))
app.use(bp.json())
app.use('/api', api)
app.use('/single', single)
app.use('/role', role)
app.use('/all', all)

console.log(jsonPath)
app.listen(3000, function (req, res) {
    console.log('Server is listening.')
});