const {Router} = require('express')
const adminRouter = Router();
const {adminModel, userModel, courseModel} = require('../db')
const {z} = require('zod')
const jwt = require('jsonwebtoken')
// const JWT_SECRETE = "kahi"
const {JWT_SECRETE_admin} = require('../config')
const {app} = require('../middleware/adminmiddleware')
const bcrypt = require('bcrypt');

// const {adminModel} = require('../db')

adminRouter.post('/signup',async function(req,res){
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
     
        const admin = await adminModel.create({
                email : email,
                password : hashedpassowrd,
                firstname : firstname,
                lastname : lastname
        })
     
        if(admin){
         res.status(200).json({
             message:"User craeted successfully",
             admin
         })
        }
    }catch(e){
        console.error(e)
    }
})

adminRouter.post('/signin',async  function(req,res){
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
     
        const admin = await adminModel.findOne({email:email})
     
     
        const matchpassowrd = await bcrypt.compare(password,admin.password);
     
        if (!matchpassowrd) {
         return res.status(401).json({
             message: "Invalid credentials"
         });
     }
     
        if(admin){
         const token = jwt.sign({
             id: admin._id
         },JWT_SECRETE_admin)
     
         res.json({
             token:token,
             admin,
             userid : admin._id
         })
        }else{
         return res.status(404).json({
             message: "User not found"
         });
        }
    }catch(e){
     console.log(e)
    }

})

adminRouter.post('/course',app,async function(req,res){
    try{

        const adminId = req.userId;
        const {title,description,imageUrl,price} = req.body;
       const course = await courseModel.create({
          title:title,
          description : description,
          imageUrl: imageUrl,
          price:price,
          creatorId:adminId
        })
        if(course){
          res.status(200).json({
              message:"made course successfully",
              course,
              id:course._id
          })
        }else{
          res.status(404).json({
              message:"failed",
              error: course.error
          })
        }
        
    }catch(e){
    console.error(e)
    }
})

adminRouter.put('/course',app,async function(req,res){
    const adminId = req.userId;
    const {title,description,imageUrl,price,courseId} = req.body;

    const course = await courseModel.findByIdAndUpdate({
        _id : courseId,
        creatorId : adminId
    },{
        title:title,
        description : description,
        imageUrl : imageUrl,
        price : price
    },{
        new:true
    })

    res.json({
        message : "Course updated",
        course,
        id: course._id
    })
})
adminRouter.get('/course',app,async function(req,res){
    try{
        const admin = req.userId
       const course = await courseModel.find({
        creatorId:admin
       })
       res.json({
        message: "Course updated",
        course
    })

    }catch(e){
     console.error(e);
    }
})

module.exports = {
    adminRouter : adminRouter
}