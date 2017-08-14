var path = require('path')
var jsonPath = path.join(__dirname, 'data.json');
var url = require('url');
var express = require("express")
var router = express.Router()
var procedures = require('./roleprocedures')
router.route('/:role')
    .get(function (req, res) {
        procedures.role(req.params.role)
            .then(function (success) {
                res.send(success)
            }, function (err) {
                console.log(err);
                res.sendStatus(500);
            });

        console.log('GET')
    })
module.exports = router