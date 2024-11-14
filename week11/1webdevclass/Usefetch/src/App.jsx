// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { useEffect } from 'react'

import { useState } from "react";
import { UseFetch, usePostTitle } from "./usefect";
import { usePrev } from "./useprev";

// function App() {
//   const [post,setPost] = useState(0)

//  async function getPosts(){
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const json = await response.json();
//   setPost(json);
//  }
//   useEffect(()=>{
//     getPosts()
//   },[])
//   return (
//     <>
//       {post.title}
//     </>
//   )
// }

// export default App

function App(){
  const [state,setState]=useState(0);
  const prev = usePrev(state);
  const [currentPost,setCurrentPost]=useState(1);
  const {finalData,loading} = UseFetch("https://jsonplaceholder.typicode.com/todos/"+currentPost);
  if(loading){
    return <div>
      loading ...
    </div>
  }
  return (
    <div>
      <button onClick={()=>setCurrentPost(1)}>1</button>
      <button onClick={()=>setCurrentPost(2)}>2</button>
      <button onClick={()=>setCurrentPost(3)}>3</button>
      <button onClick={()=>setCurrentPost(4)}>4</button>
      {JSON.stringify(finalData)}

      <p>{state}</p>
      <button
      onClick={()=>{
        setState((curr)=>curr+1)
      }}
      >Click me</button>
      <p>Thw perivous value was {prev}</p>
    </div>
  )
}
export default App