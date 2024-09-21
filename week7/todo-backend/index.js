const express = require('express');
const app = express();
app.use(express.json());
const jwt = require('jsonwebtoken');
const JWT_SECRETE = "kahi";
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://yashvardhandhondge:Yash2005%40@cluster0.jowv6cy.mongodb.net/todo-pratice')
const signupRoute = require('./routes/Signup');
app.use(signupRoute)
app.listen(3000,()=>{
    console.log('App is listening to port 3000')
})