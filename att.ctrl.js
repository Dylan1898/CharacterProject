var path = require('path')
var jsonPath = path.join(__dirname, 'data.json');
var url = require('url');
var express = require("express")
var router = express.Router()
var procedures = require('./attributeprocedures')
router.route('/:attribute')
    .get(function (req, res) {
        procedures.att(req.params.attribute)
            .then(function (success) {
                
                res.send(success)
            }, function (err) {
                console.log(err);
                res.sendStatus(500);
            });

        console.log('GET')
        // console.log(req.params)
    })
module.exports = router