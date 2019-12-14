var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var moneySchema = new Schema({
    _id : integer,
    bill_no: String,
    amount_spent: String,
    amount_recieved: String,
    //currency_type:
    //  createdAt:,
    //  deletedAt:
});

var money = mongoose.model('moneyData', moneySchema);

module.exports = money;