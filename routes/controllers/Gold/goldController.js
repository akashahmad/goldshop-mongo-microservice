var gold = require('../../../models/goldModel');

const goldController = {
    //getting data from database
    get: async (req, res) => {
        const response = {};
        try {
            gold.find(async (err, data) => {
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
            let {bill_no,gold_sold, gold_recieved, purity, currency_type, createdAt, deletedAt} = req.body;
            let payload = {
                bill_no: bill_no,
                gold_sold: gold_sold,
                gold_recieved: gold_recieved,
                purity: purity,
                currency_type: currency_type,
                createdAt: createdAt,
                deletedAt: deletedAt
            };
            let {id} = req.params;
            gold.findByIdAndUpdate(id, payload,async (err) => {
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
            let {bill_no,gold_sold, gold_recieved, purity, currency_type, createdAt, deletedAt} = req.body;
            let payload = {
                bill_no: bill_no,
                gold_sold: gold_sold,
                gold_recieved: gold_recieved,
                purity: purity,
                currency_type: currency_type,
                createdAt: createdAt,
                deletedAt: deletedAt
            };
            gold.create(payload,async (err, data) => {
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
            gold.findById(id,async (err, data) => {
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
            gold.findOneAndDelete(id,async (err) => {
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
module.exports = goldController;