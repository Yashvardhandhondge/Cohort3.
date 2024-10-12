const { Router } = require("express");

const courseRouter = Router();
const {app}= require('../middleware/usermiddleware')
const {purchaseModel, courseModel} = require('../db')

courseRouter.post('/purchase',app,async function(req,res){
    const userId = req.userId;
    const courseId = req.body.courseId;
    
    await purchaseModel.create({
        userId,
        courseId
    })
    res.json({
        message:"You have pyrchesh successfully"
    })
})

courseRouter.get('/courses',async function(req,res){
      const course = await courseModel.find({});
      res.json({
        course
      })
})

module.exports = {
    courseRouter : courseRouter
}