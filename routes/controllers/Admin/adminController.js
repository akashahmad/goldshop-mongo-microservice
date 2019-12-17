var admin = require('../../../models/adminModel');

const adminController = {
    //getting data from database
    get: async (req, res) => {
        const response = {};
        try {
            admin.find(async (err, data) => {
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
            let {name, username, email, password, status, pic,createdAt, deletedAt } = req.body;
            let payload = {
                name: name,
                username: username,
                email: email,
                password: password,
                status : status,
                pic: pic,
                createdAt: createdAt,
                deletedAt: deletedAt
            };
            let {id} = req.params;
            admin.findByIdAndUpdate(id, payload,async (err) => {
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
            let {name, username,email,password,status, pic, createdAt, deletedAt} = req.body;
            let payload = {
                name: name,
                username: username,
                email: email,
                password: password,
                status : status,
                pic : pic,
                createdAt: createdAt,
                deletedAt: deletedAt
            };
            admin.create(payload,async (err, data) => {
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
            admin.findById(id,async (err, data) => {
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
            admin.findOneAndDelete(id,async (err) => {
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
// app.post('/sign_up', function(req,res){
//     const name = req.body.name;
//     const email =req.body.email;
//     const pass = req.body.password;
//     const phone =req.body.phone;
//
//     const data = {
//         "name": name,
//         "email":email,
//         "password":pass,
//         "phone":phone
//     }
//     db.collection('details').insertOne(data,function(err, collection){
//         if (err) throw err;
//         console.log("Record inserted Successfully");
//
//     });
//
//     return res.redirect('signup_success.html');
// });

};
module.exports = adminController;