const express = require('express');
const jwt = require('jsonwebtoken');
const { Usermodel } = require('../db');
const JWT_SECRETE = "kahi";

const app = express.Router()

app.post('/signin',async function(req,res){
    try{

        const email = req.body.email;
        const password = req.body.password;
    
      const user =  await Usermodel.findOne({
            email:email,
            password:password,
        })
    
        if(user){
            const token = jwt.sign({
               id : user._id.toString()
            },JWT_SECRETE)
            res.status(200).send({
                message: "you have signed in successfully",
                token,
                user
            })
        }else{
            res.status(403).json({
                message:"Incoorect credentials"
            })
        }
    }catch(e){
        console.error(e)
    }

})

module.exports = app