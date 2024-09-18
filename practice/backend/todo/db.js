const mongoose = require('mongoose');

const schema = mongoose.Schema;
const objectid = mongoose.Types.ObjectId;

const user = new schema({
    email: {type:String ,unique : true},
    name : String,
    password : String
})

const Todo = new schema({
    title : String,
    description : String,
    done : Boolean,
    userId : objectid
})

const usermodel = mongoose.model('User',user);
const todomodel = mongoose.model('Todo',Todo);

module.exports={
    Usermodel : usermodel,
    Todomodel : todomodel
}