var customer = require('../../../models/customerModel');

const customerController = {
    //getting data from database
    get: async (req, res) => {
        const response = {};
        try {
            customer.find(async (err, data) => {
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
            let {user_name, email,phone,added_by,created_at,deleted_at} = req.body;
            let payload = {
                username: user_name,
                email: email,
                phone: phone,
                addedBy: added_by,
                createdAt: created_at,
                deletedAt: deleted_at
            };
            let {id} = req.params;
            customer.findByIdAndUpdate(id, payload,async (err) => {
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
            let {user_name, email,phone,added_by,created_at,deleted_at} = req.body;
            let payload = {
                username: user_name,
                email: email,
                phone: phone,
                addedBy: added_by,
                createdAt: created_at,
                deletedAt: deleted_at
            };
            customer.create(payload,async (err, data) => {
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
            customer.findById(id,async (err, data) => {
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
            customer.findOneAndDelete(id,async (err) => {
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
module.exports = customerController;