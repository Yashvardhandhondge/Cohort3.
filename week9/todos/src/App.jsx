function App(){
  const todos =[{
      title:"Go to gym",
      done:false
  },{
    title:"Eat food",
    done:true
  }]

  // const todoscomponent = todos.map(todo=><Todo title={todo.title} done={todo.done} />)

  return <div>
    {/* {todoscomponent} */}
    
    <Todo key={1} title={"Go to gym"} done={false}></Todo>
    <Todo key={2} title={"Eat food"} done={true}></Todo>
  
  </div>
}
function Todo ({title,done}){
  return <div>
    {title} - {done ? "done":"not done"}
  </div>
}
export default App