// const express = require('express');
// const { Todomodel } = require('../db');
// const { auth } = require('../middleware');
// const app = express.Router();

// app.post('/todo', auth, async function (req, res) {
//     try {
//         const { title, done } = req.body;  // Destructure title and done from the body
//         const userId = req.userId;  // This is set in the auth middleware

//         if (!title) {
//             return res.status(400).json({ message: "Title is required" });
//         }

//         const todo = await Todomodel.create({ title, done, userId });

//         res.status(200).json({
//             userId,
//             todoid: todo._id
//         });
//     } catch (e) {
//         console.error(e);
//         res.status(500).json({ message: "Server error" });
//     }
// });

// module.exports = app;
















const express = require('express');
const { Todomodel } = require('../db');
const { auth } = require('../middleware');
const app = express.Router();
app.post('/todo',auth,async function(req,res){
    try{
      const title = req.body.title;
      const done = req.body.done;
      const userId = req.userId;

      const todo =await Todomodel.create({
        title,
        done,
        userId
      })

      res.status(200).json({
        userId,
        todoid :  todo._id,
        todo
      })
    }catch(e){
        console.error(e)
    }
})

app.get('/todo',auth,async function(req,res){
    try{
     const userId = req.userId;
     const todo = await Todomodel.find({userId});
     res.json({
        todo
     })
    }catch(e){
            console.log(e)
    }
})

app.get('/todo/:title',auth,async function(req,res){
  try{
    const userId = req.userId;
    const title = req.params.title;

    const todo = await Todomodel.findOne({userId,title});

    if(!todo){
      return res.status(404).json({
        message : " Todo not found "
      })
    }

    res.json({
      todo
    })
  }catch(e){
    console.error(e);
  }
})

// app.put('/update',async function(req,res){
//   try{
//     const userId = req.userId;
//     const title = req.body.title;
//     const done = req.body.done;

//   }
// })

module.exports = app;