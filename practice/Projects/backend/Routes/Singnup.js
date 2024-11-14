const express = require('express');
const SignupRoute = express.Router();
const {z} = require('zod')
const bcrypt = require('bcrypt');
const {userModel} = require('../model/db')
const {user_screte} = require('../config')
const jwt = require('jsonwebtoken')
SignupRoute.post('/signup',async (req,res)=>{

    try{
        const signup = z.object({
        email : z.string().email(),
        Fullname : z.string().min(3).max(100),
        password : z.string().min(4).max(100),
        })

        const body = await signup.safeParse(req.body);

        if(!body.success){
            res.status(400).json({
                message: body.error
            })
        }
        
        const {email,password,Fullname} = req.body
        const hashpassword =await bcrypt.hash(password,5);
        
        const User = await userModel.create({
            email ,
            hashpassword,
            Fullname
        })
        
        const token = jwt.sign({
            _id : User._id
        },user_screte)

        if(User){
            return res.status(200).json({
                message:'User created sucessfully',
                token,
                User
            })
        }else{
            return req.status(400).json({
                message:"Something error occured",
            })
        }
        
    }catch(e){
        console.error(e)
    }

})
module.exports ={SignupRoute}