var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var customerSchema = new Schema({
    //customer_id: integer,
    username: String,
    //phone: integer,
    email: String,
    addedBy: String,
    createdAt: date ,
    //deletedAt
});

var customer = mongoose.model('customerData', customerSchema);

module.exports = customer;