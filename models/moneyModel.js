'use strict';
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var moneySchema = new Schema({
    bill_no: Number,
    amount_spent: String,
    amount_recieved: String,
    currency_type: String,
    createdAt:  Date,
    deletedAt:  Date
});

var money = mongoose.model('money_details', moneySchema);

module.exports = money;