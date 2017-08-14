var path = require('path')
var jsonPath = path.join(__dirname, 'data.json');
var url = require('url');
var express = require("express")
var router = express.Router()
var fs = require('fs');
var procedures= require('./allprocedures')
router.route('/')
    .get(function (req, res) {
           procedures.all()
            .then(function (success) {
                res.send(success)
                console.log(success)
            }, function(err) {
                console.log(err);
                res.sendStatus(500);
            });
        
        console.log('GET')
    })          
    module.exports = router