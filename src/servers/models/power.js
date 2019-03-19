var mongoose = require('mongoose')

var PowerSchema = require('../schemas/power')

var Power = mongoose.model('Power', PowerSchema)

module.exports = Power
