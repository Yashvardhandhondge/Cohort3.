const express = require('express');
const jwt = require('jsonwebtoken');
const { z } = require('zod');
require('dotenv').config()
const JWT_SCERETE = "kahi";
const app = express.Router();
const {Usermodel} = require('../db');


app.post('/signin',async (req,res)=>{
    try{
      const requiredbody = z.object({
        email:z.string().min(3).max(100).email()
      })

      const parsedData = requiredbody.safeParse(req.body);

      if(!parsedData.success){
        res.json({
            message : 'You have entered wrong credential',
            error: parsedData.error
        })
        return
      }

      const email = req.body.email;

      const user = await Usermodel.findOne({
        email:email
      })
      
      if(user){
        const token = jwt.sign({
            id: user._id.toString()
        },JWT_SCERETE)
        res.status(200).json({
            message:"You have signed in successfully ",
            token,
            user
        })
      }else{
        res.status(403).json({
            message:"Incoorect credentials",

      })
      }
    }catch(e){
         console.log(e)
    }
})

module.exports = app