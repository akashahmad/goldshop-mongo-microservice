'use strict';
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let customerSchema = new Schema({
    username: String,
    phone: Number,
    email: String,
    addedBy: String,
    createdAt:  Date,
    deletedAt:  Date
});

let customer = mongoose.model('customers', customerSchema);

module.exports = customer;