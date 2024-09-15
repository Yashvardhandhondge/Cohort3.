const express = require('express');
const { Todomodel } = require('../db');
const { auth } = require('../middleware');
const app = express.Router();

app.post('/todo',auth,async function(req,res){
    try{
      const title = req.body.title;
      const done = req.body.done;
      const userId = req.userId;

      const todo = Todomodel.create({
        title,
        done,
        userId
      })

      res.status(200).json({
        userId
      })
    }catch(e){
        console.error(e)
    }
})

app.get('/todo',auth,async function(req,res){
    try{
     const userId = req.userId;
     const todo = await Todomodel.find({userId});
     res.json({
        todo
     })
    }catch(e){

    }
})

module.exports = app;