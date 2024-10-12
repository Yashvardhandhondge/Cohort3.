const { Router } = require("express");
const { userModel, courseModel, purchaseModel } = require("../db");
const {z} = require('zod')
const jwt = require('jsonwebtoken')

const bcrypt = require('bcrypt');
const userRouter = Router();
const {JWT_SECRETE_user} = require('../config');
const { app } = require("../middleware/adminmiddleware");

userRouter.post("/signup",async function(req, res) {
    try{
        const verifieduser = z.object({
         email : z.string().min(3).max(100),
         password : z.string().min(3).max(30),
         firstname : z.string(),
         lastname : z.string()
        })
        const parsedbosy = verifieduser.safeParse(req.body);
        if(!parsedbosy.success){
         res.status(404).json({
             message :"You have enterd something wrong",
             error : parsedbosy.error
         })
         return
        }
        const email = req.body.email;
        const password = req.body.password;
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
     
        const hashedpassowrd = await bcrypt.hash(password,5);
     
        const user = await userModel.create({
                email : email,
                password : hashedpassowrd,
                firstname : firstname,
                lastname : lastname
        })
     
        if(user){
         res.status(200).json({
             message:"User craeted successfully",
             user
         })
        }
    }catch(e){
        console.error(e)
    }
})

userRouter.post("/signin",async function(req, res) {
    try{

        const verifiedbody = z.object({
         email : z.string().min(3).max(100),
         password : z.string().min(3).max(30)
        })
        const parsedbody = verifiedbody.safeParse(req.body);
     
        if(!parsedbody.success){
         res.status(404).json({
             message :"You have types something wrong",
             error :parsedbody.error
         })
         return
        }
     
        const {email,password} =req.body;
     
        const user = await userModel.findOne({email:email})
     
     
        const matchpassowrd = await bcrypt.compare(password,user.password);
     
        if (!matchpassowrd) {
         return res.status(401).json({
             message: "Invalid credentials"
         });
     }
     
        if(user){
         const token = jwt.sign({
             id: user._id
         },JWT_SECRETE_user)
     
         res.json({
             token:token,
             user,
             userid : user._id
         })
        }else{
         return res.status(404).json({
             message: "User not found"
         });
        }
    }catch(e){
    console.error(e)
    }
})

userRouter.get("/purchases",app,async  function(req, res) {
   const userId = req.userId;
   const purchase = await purchaseModel.find({
    userId,
   })
   const courseData = await courseModel.find({
    _id:{$in:purchase.map(x=>x.courseId)}
   })
   res.json({
    purchase,
    courseData
   })
})

module.exports = {
    userRouter: userRouter
}