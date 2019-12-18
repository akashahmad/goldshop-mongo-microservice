var money = require('../../../models/moneyModel');

const moneyController = {
    //getting data from database
    get: async (req, res) => {
        const response = {};
        try {
            money.find(async (err, data) => {
                if (err) {
                    response.statusCode = 500;
                    response.body = JSON.stringify({err});
                    res.status(response.statusCode).send(response.body);
                } else {
                    response.statusCode = 200;
                    response.body = JSON.stringify({
                        message: 'Ok',
                        data: data
                    });
                }
                await res.status(response.statusCode).send(response.body);
            })
        } catch (err) {
            response.statusCode = 500;
            response.body = JSON.stringify({err});
            res.status(response.statusCode).send(response.body);
        }
    },
    put: async (req, res)=>{
        const response = {};
        try {
            let {bill_no, amount_spent, amount_recieved, currency_type, created_at, deleted_at} = req.body;
            let payload = {
                bill_no: bill_no,
                amount_spent: amount_spent,
                amount_recieved: amount_recieved,
                currency_type: currency_type,
                createdAt: created_at,
                deletedAt: deleted_at
            };
            let {id} = req.params;
            money.findByIdAndUpdate(id, payload,async (err) => {
                if (err) {
                    response.statusCode = 500;
                    response.body = JSON.stringify({err});
                    res.status(response.statusCode).send(response.body);
                } else {
                    response.statusCode = 200;
                    response.body = JSON.stringify({
                        message: 'Ok',
                    });
                }
                await res.status(response.statusCode).send(response.body);
            })
        } catch (err) {
            response.statusCode = 500;
            response.body = JSON.stringify({err});
            res.status(response.statusCode).send(response.body);
        }
    },
    post: async (req, res)=>{
        const response = {};
        try {
            let {bill_no, amount_spent, amount_recieved, currency_type, created_at, deleted_at} = req.body;
            let payload = {
                bill_no: bill_no,
                amount_spent: amount_spent,
                amount_recieved: amount_recieved,
                currency_type: currency_type,
                createdAt: created_at,
                deletedAt: deleted_at
            };
            money.create(payload,async (err, data) => {
                if (err) {
                    response.statusCode = 500;
                    response.body = JSON.stringify({err});
                    res.status(response.statusCode).send(response.body);
                } else {
                    response.statusCode = 200;
                    response.body = JSON.stringify({
                        message: 'Ok',
                        data: data
                    });
                }
                await res.status(response.statusCode).send(response.body);
            })
        } catch (err) {
            response.statusCode = 500;
            response.body = JSON.stringify({err});
            res.status(response.statusCode).send(response.body);
        }
    },
    single: async (req, res)=>{
        const response = {};
        try {
            let {id} = req.params;
            money.findById(id,async (err, data) => {
                if (err) {
                    response.statusCode = 500;
                    response.body = JSON.stringify({err});
                    res.status(response.statusCode).send(response.body);
                } else {
                    response.statusCode = 200;
                    response.body = JSON.stringify({
                        message: 'Ok',
                        data: data
                    });
                }
                await res.status(response.statusCode).send(response.body);
            })
        } catch (err) {
            response.statusCode = 500;
            response.body = JSON.stringify({err});
            res.status(response.statusCode).send(response.body);
        }
    },
    delete: async (req, res)=>{
        const response = {};
        try {
            let {id} = req.params;
            money.findOneAndDelete(id,async (err) => {
                if (err) {
                    response.statusCode = 500;
                    response.body = JSON.stringify({err});
                    res.status(response.statusCode).send(response.body);
                } else {
                    response.statusCode = 200;
                    response.body = JSON.stringify({
                        message: 'given userId deleted',

                    });
                }
                await res.status(response.statusCode).send(response.body);
            })
        } catch (err) {
            response.statusCode = 500;
            response.body = JSON.stringify({err});
            res.status(response.statusCode).send(response.body);
        }
    }
};
module.exports = moneyController;