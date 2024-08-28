const { error } = require('console');
const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());
const FILE_PATH = './todos.json'
function readTodos(){
    if(!fs.existsSync(FILE_PATH)){
        return[];
    }
    const data = fs.readFileSync(FILE_PATH);
    return JSON.parse(data);
}

function writeTodos(todos){
    fs.writeFileSync(FILE_PATH,JSON.stringify(todos,null,2));

}
app.post('/todos',function(req,res){
    const {title,description} = req.body;
    const todos = readTodos();
    const newTodo = {
        id:todos.length ? todos[todos.length -1].id + 1:1,
        title,
        description,
    }
    todos.push(newTodo);
    writeTodos(todos);
    res.status(201).json(newTodo)
})

app.get('/todos',function(req,res){
    const todos = readTodos();
    const todo = todos.find(t=>t.id == req.params.id);
    if(!todo) return res.status(400).json({error:"Task not present"});
    res.json(todo);
})

app.put('/todos/:id',function(req,res){
    const todos = readTodos();
    const index = todos.findIndex(t=>t.id == req.params.id)
    if(index === -1) return res.status(404).json({error:'task not found'});

    todos[index] = {...todos[index],...req.body};
    writeTodos(todos);
    res.json(todos[index]);

})

app.delete('/todos/:id',function(req,res){
    let todos = readTodos();
    const index = todos.findIndex(t=>t.id )
})