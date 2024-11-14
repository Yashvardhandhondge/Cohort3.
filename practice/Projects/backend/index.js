const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const router = express.Router();
app.use(express.json())
require('dotenv').config()
const {SignupRoute} = require('./Routes/Singnup')
console.log(SignupRoute)
app.use('/user',SignupRoute);


async function main(){
 const Mongo =  await process.env.DATABASE_URL;
 await mongoose.connect(Mongo);
 console.log(Mongo ? "Mongodb connected" : "Mongosbnot connected")
}
main();

app.listen(3000,()=>{
    console.log("Server is running at 3000")
})