const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
const JWT_SECRETE = "kahi";


mongoose.connect('mongodb+srv://yashvardhandhondge:Yash2005%40@cluster0.jowv6cy.mongodb.net/todo-pratice')

const signupRoute = require('./routes/Signup');
const signinRoute = require('./routes/Signin');
const todoRoute = require('./routes/todos');

app.use(signupRoute);
app.use(signinRoute);
app.use(todoRoute)

app.listen(3000,()=>{
    console.log("App is listening to 3000 port")
})