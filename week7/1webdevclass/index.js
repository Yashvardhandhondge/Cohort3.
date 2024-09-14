const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRETE = "kAHI";
const {Usermodel,Todomodel} = require('./db');
const { default: mongoose } = require('mongoose');
const app = express();
app.use(express.json())
mongoose.connect('mongodb+srv://yashvardhandhondge:Yash2005%40@cluster0.jowv6cy.mongodb.net/todo-yash')
app.post('/signup',async function(req,res){
    try{
        const email = req.body.email;
        const password = req.body.password;
        const name = req.body.name
 
       await Usermodel.create({
               email:email,
               password:password,
               name:name
        })
 
        res.json({
         message :"You are logged in"
        })
    }catch(e){
        console.error(e)
    }
       
})

app.post('/signin',async function(req,res){
    try{
        const email = req.body.email;
     const password = req.body.password;

     const user = await Usermodel.findOne({
        email: email,
        password : password
     })

     console.log(user)

     if(user){
        const token = jwt.sign({
              id: user._id.toString()
        },JWT_SECRETE)
        res.json({
   token
        })
     }else{
        res.status(403).json({
     message : "Incoorect credientials"
        })
     }
    }catch(e){
        console.error(e)
    }
    
})

app.post('/todo',auth,function(req,res){
  const userId = req.userId

  res.json({
    userId:userId
  })
})
app.get('/todo',function(req,res){
  const userId = req.userId
  res.json({
    userId:userId
  })
})

function auth(req,res,next){
    const token = req.headers.token;

    const decodedata = jwt.verify(token,JWT_SECRETE);

    if(decodedata){
        req.userId = decodedata.id
        next();
    }else{
        res.status(403).json({
            message:"Incorrect credentials"
        })
    }
}

app.listen(3000)
