'use strict';
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var goldSchema = new Schema({
    bill_no: Number,
    gold_sold: String,
    gold_recieved: String,
    currency_type: String,
    purity: String,
    createdAt:  Date,
    deletedAt:  Date
});

var gold = mongoose.model('gold_details', goldSchema);

module.exports = gold;