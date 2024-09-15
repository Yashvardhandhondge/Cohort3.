const express = require('express');
const { Usermodel } = require('../db');
const app = express.Router();

app.post('/signup',async function(req,res){
    try{

        const email = req.body.email;
        const password = req.body.password;
        const name = req.body.name;
    
    const user =    await Usermodel.create({
            email:email,
            password:password,
            name:name
        })
    
        res.json({
            message : "You are signed up",
            User : user
        })
    }catch(e){
        console.error(e)
    }
})

module.exports = app;