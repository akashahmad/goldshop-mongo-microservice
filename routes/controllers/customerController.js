const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
var customer = require('../../models/customerModel');

const collection = "customers";

app.get('/getCustomers', (req, res)=> {
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

