const mongoose = require('mongoose');
const { string } = require('zod');
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new mongoose.Schema({
    email:{type:String},
    Fullname:{type:String},
    password:{type:String}
})

const userModel = mongoose.model("User",userSchema);

module.exports ={
    userModel
}