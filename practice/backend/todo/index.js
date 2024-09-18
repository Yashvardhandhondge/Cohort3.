require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
const port = 3000;
const signupRoute = require('./routes/Signup');
const signinRoute = require('./routes/Signin');
const todo = require('./routes/Todos')

app.use(signupRoute);
app.use(signinRoute);
app.use(todo)
// console.log(signinRoute)
console.log(process.env.Database_url)

async function Connection(){

    try{
      await  mongoose.connect(process.env.Database_url);

        console.log("Connected succesuffly to mongodb");
    }catch(e){
        console.error(e)
    }
}

Connection();



app.listen(port,()=>{
    console.log(`App is listening to ${port}`)
});
