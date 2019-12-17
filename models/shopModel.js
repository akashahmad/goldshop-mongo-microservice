'use strict';
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var shopSchema = new Schema({
    staff_id : Number,
    name: String,
    password: String,
    address: String,
    phone: Number,
    logo: String,
    createdAt:  Date,
    deletedAt:  Date
});

var shop = mongoose.model('shop', shopSchema);

module.exports = shop;