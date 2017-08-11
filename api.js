var express= require("express")
var router = express.Router()
var role = require("./role.ctrl.js")
var all = require("./all.ctrl.js")
var single = require("./single.ctrl.js")
router.use("/role", role)
router.use("/single", single)
router.use("/all", all)
module.exports = router; 
