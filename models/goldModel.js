var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var goldSchema = new Schema({
    _id : integer,
    bill_no: String,
    gold_sold: String,
    gold_recieved: String,
    //currency_type:
    //purity:
    //  createdAt:,
    //  deletedAt:
});

var gold = mongoose.model('goldData', goldSchema);

module.exports = gold;