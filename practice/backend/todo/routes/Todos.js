const express = require('express');
const { auth } = require('../midlleware'); 
const { Todomodel } = require('../db');
const { z } = require('zod');

const app = express.Router();

app.use(express.json());

app.post('/todo', auth, async (req, res) => {
    try {
        const requiredbody = z.object({
            title: z.string().min(3).max(100),
            description: z.string().min(3).max(1000),
            done: z.boolean()
        });

        const parsedbody = requiredbody.safeParse(req.body);

        if (!parsedbody.success) {
            return res.status(400).json({
                message: "You have entered wrong body",
                error: parsedbody.error
            });
        }

        const { title, description, done } = req.body;
        const userId = req.userId;

        const todo = await Todomodel.create({
            title,
            description,
            done,
            userId
        });

        res.status(201).json({
            message: "Todo created successfully",
            userId,
            todoId: todo._id,
            todo
        });

    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.get('/todo',auth,async (req,res)=>{
    try{
       const userId = req.userId;
       const todo = await Todomodel.find({
         userId
       });
       res.json({
        todo
    })
    }catch(e){
         console.log(e)
    }
})

app.get('/todo/:id',auth,async (req,res)=>{
    try{
      const userId = req.userId;
      const todoid = req.params.id;

     const todo = await Todomodel.find({userId,_id:todoid});

     if(!todo){
        return res.status(404).json({message:"Todo not found"});

     }
     res.json({
        todo
     })

    }catch(e){
        console.error(e)
    }
})

app.put('/todo/:id',auth,async (req,res)=>{
    try{
       const userId = req.userId;
       const title = req.body.title;
       const done = req.body.done;
       const TodoId = req.params.id;
       const description = req.body.description;

       const todo = await Todomodel.findOneAndUpdate(
        {_id:TodoId,userId},
        {title,done,description},
        {new:true}
       )

       if(!todo){
        return res.status(404).json({
            message:"Todo not found"
        })
    }

    res.json({
     message:"Todo updated successfully",
     todo   
    })
    }catch(e){
        console.error(e)
    }
})

app.delete('/todo/:id',auth,async (req,res)=>{
    try{
       const userId = req.userId;
       const todoid = req.params.id;

       const todo = await Todomodel.findOneAndDelete({id:todoid,userId});

       if(!todo){
        return res.status(404).json({
            message:"Todo not found"
        })
       }

       res.json({
        message:"Tpdp deleted successfully"
       })
    }catch(e){
      console.error(e)
    }
})

module.exports = app;
