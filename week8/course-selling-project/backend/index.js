const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/courses");


app.use("/user", userRouter);
app.use("/course", courseRouter);


app.listen(port,()=>{
    console.log(`App is listening to the port,${3000}`)
})