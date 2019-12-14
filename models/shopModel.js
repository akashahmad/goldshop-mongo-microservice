var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var shopSchema = new Schema({
    //shop_id:
    //staff_id : integer,
    name: String,
    password: String,
    address: String,
    // phone:
    // logo:
    // createdAt:,
    // deletedAt:
});

var shop = mongoose.model('shopData', shopSchema);

module.exports = shop;