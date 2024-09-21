const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/courses");
const {adminRouter} = require('./routes/admin');

app.use('/admin',adminRouter)
app.use("/user", userRouter);
app.use("/course", courseRouter);


app.listen(port,()=>{
    console.log(`App is listening to the port,${3000}`)
})