const express = require('express');
const jwt = require('jsonwebtoken');
 
const {JWT_SECRETE_user} = require('../config')

function app(req,res,next){
  const token = req.headers.token;
  const decoded = jwt.verify(token,JWT_SECRETE_user);

  if(!decoded){
    req.userId = decoded.id;
    next()
  }else{
    res.status(404).json({
        messsage :"You are not signed in"
    })
  }
}

module.exports ={
    app,
    JWT_SECRETE_user
}