const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;
// const mongoose = require('mongoose');


const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/courses");
const {adminRouter} = require('./routes/admin');
const { default: mongoose } = require('mongoose');
require('dotenv').config()
app.use('/admin',adminRouter)
app.use("/user", userRouter);
app.use("/course", courseRouter);

async function main (){

    await mongoose.connect('mongodb+srv://yashvardhandhondge:Yash2005%40@cluster0.jowv6cy.mongodb.net/Course-selling-site')
}
main()
app.listen(port,()=>{
     console.log(`App is listening to the port,${3000}`)
 })

 console.log(process.env.JWT_SECRETE_admin)