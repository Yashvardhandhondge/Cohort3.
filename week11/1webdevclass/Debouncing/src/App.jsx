import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'


function useDebounce(original){
  const currentClock = useRef();
  const fn = ()=>{
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(original,200);
  }
  return fn
}

function App() {
  const [count, setCount] = useState(0)
 function sendDataToBackend(){
  fetch("api.amazon,com/Serach/")
 }

 const debounce = useDebounce(sendDataToBackend)
  return (
    <>
     <input type="text" onChange={debouncedfm} />
    </>
  )
}

export default App
