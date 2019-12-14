const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
var shop = require('../../models/shopModel');

const collection = "shop";

app.get('/get', (req, res)=> {
    db.getDB().collection(collection).find({}).toArray((err,documents)=>{
        if(err)
            console.log(err);
        else {
            console.log(documents);
            res.json(documents);
        }
    });
});

app.put('/:id', (req,res)=>{
    const todoID = req.params.id;
    const userInput = req.body;

    db.getDB().collection(collection).findOneAndUpdate({_id : db.getPrimaryKey(todoID)},{$set :{todo : userInput.todo}},{returnOriginal : false},(err,result) => {
        if(err)
            console.log(err);
        else
            res.json(result);
    });
});

app.post('/', (req, res)=>{
    const userInput = req.body;
    db.getDB().collection(collection).insertOne(userInput,(err,result)=>{
        if (err)
            console.log(err)
        else
            res.json({result : result, document : result.ops[0]});
    });
});

app.delete('/:id', (req, res)=>{
    const todoID = req.params.id;

    db.getDB().collection(collection).findOneAndDelete({_id : db.getPrimaryKey(todoID)},(err,result)=>{
        if(err)
            console.log(err);
        else
            res.json(result);
    });
});

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

