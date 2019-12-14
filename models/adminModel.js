var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var adminSchema = new Schema({
    //admin_id: integer,
    name: String,
    username: String,
    email: String,
    password: String,
    status : String,
   // pic : String
});

var admin = mongoose.model('adminData', adminSchema);

module.exports = admin;