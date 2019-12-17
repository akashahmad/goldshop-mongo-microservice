'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
// let url = require('mongoose-type-url');

let adminSchema = new Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    status : String,
    pic : String,
    createdAt:  Date,
    deletedAt:  Date
});

let admin = mongoose.model('admins', adminSchema);

module.exports = admin;