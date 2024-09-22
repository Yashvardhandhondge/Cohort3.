const { Schema, default: mongoose } = require('mongoose');



const ObjectId = mongoose.Types.ObjectId

const userSchema =new Schema({
   email : String,
   password : String,
   firstname : String,
   lastname : String
})

const adminSchema =new Schema({
    email : String,
    password : String,
    firstname : String,
    lastname : String
})

const courseSchema =new Schema({
       title : String,
       description :String,
       price : Number,
       imageUrl : String,
       creatorId : ObjectId
})

const purchaseSchema =new Schema({
    userId : ObjectId,
    courseId : ObjectId
})

const userModel = mongoose.model('user',userSchema);
const adminModel = mongoose.model('admin',adminSchema);
const courseModel = mongoose.model('course',courseSchema);
const purchaseModel = mongoose.model('Purchase',purchaseSchema);

module.exports = {
    userModel : userModel,
    adminModel : adminModel,
    courseModel : courseModel,
    purchaseModel : purchaseModel
}