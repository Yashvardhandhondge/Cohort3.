const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRETE = 'kahi';
const {Usermodel} = require('../db');
const {z} = require('zod')

const app = express.Router()

app.post('/signin',async function(req,res){
    const safebody = z.object({
        email:z.string()
    })
    const bodyparsed = safebody.safeParse(req.body);
    if(!bodyparsed){
        res.json({
            message : "You have incorrect incredentials typed",
            error:bodyparsed.error
        })
        return
    }
    const email = req.body.email;
    // const password = req.body.password

    const user = await Usermodel.find({
        email:email
    })

    if(user){
      const token =  jwt.sign({
            id: user._id.toString()
        },JWT_SECRETE)
        res.status(200).send({
            message:"You have signed in successfully ",
            token,
            user
        })
    }else{
        res.status(403).json({
            message:"Incorrect credentials "
        })
    }


})
module.exports = app