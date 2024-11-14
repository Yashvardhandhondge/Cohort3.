// import { useRef } from "react";

import { useRef } from "react";
import { useState } from "react";

// function App(){
//   const inputRef = useRef();
//   function handlefocus(){
//     inputRef.current.focus();
//   }
//   return <div>
//     <input type="text" ref={inputRef} />
//     <button onChange={handlefocus}>Submit</button>
//   </div>
// }
// export default App

//clock with a start and stop button

function App(){
  const [currentCount,setCurrentCount]= useState(1);
  const timer = useRef(null);
  

  function startClock(){
    if (!timer.current ){ 
   let value = setInterval(function(){
      setCurrentCount(c=>c+1);
    },1000)
    timer.current = value;
  }
}

  function stopClock(){
 clearInterval(timer.current)
 timer.current = null;
  }
  return <div>
    {currentCount}
    <br />
    <button onClick={startClock}>Strat</button>
    <button onClick={stopClock}>Stop</button>
  </div>
}
export default App