const express = require('express');
const {UserModel} = require('./models')
const { Keypair, Transaction, Connection} = require('@solana/web3.js');
const app = express();
const jwt = require('jsonwebtoken');
const cors = require('cors');

const connection = new Connection('https://solana-devnet.g.alchemy.com/v2/DEhoo-faZJyJO03UWMXSsKycjKrK_w9G')
app.post('/api/v1/sigin',async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    //validate the inputs ,check if the user already exits
    const keypair = new Keypair();
  await  UserModel.create({  
        username,
        password,
        publicKey:keypair.publicKey.toString(),
        privateKey : keypair.secretKey.toString()
    })

    res.json({
        message:keypair.publicKey.toString()
    })
})

app.post('/api/v1/signup',async (req,res)=>{

   const username = req.body.username;
   const password = req.body.password;
   const user =await UserModel.findOne({username,password});

   if(user){
    const token =await jwt.sign({id:user},'123');
    res.json({
        message:token
    })
   }

})
app.post('/api/v1/txn/sign',async (req,res)=>{
    const serializedTransaction  =req.body.message;
    const tx = Transaction.from(serializedTransaction);
    const Keypair = Keypair.fromSecretKey(bs58.de.decode(req.body.privateKey));
    const user = await UserModel.find({
        username:req.body.username
    },{privateKey})
    const keypair = Keypair.fromSecretKey(user.privateKey);
    const signature = await connection.sendTransaction(tx)
  console.log(signature);
    res.json({
        message:'sign txn success'
    })
})

app.get('/api/v1/txn',(req,res)=>{
    res.json({
        message:'get txn success'
    })
})
app.listen(3000)