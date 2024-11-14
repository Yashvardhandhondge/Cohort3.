// import { useState,useMemo, memo, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { atom,RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
// import { counterTom } from './store/atoms/Counter'

// function App(){
//   return(
//     <Counter/>
    
//   )
// }

// function Counter() {
//   const [count,setCount]=useState(0)

//   useEffect(function (){
//     setInterval(function(){
//       setCount(c=>c+1)
//     },3000)
//   },[])
//   return (
//     <>
//     <CurrentCount />

//    <Increase />
//    <Decrease />
//     </>
//   )
// }

// const CurrentCount = memo(function (){
//  const count= useRecoilValue(counterTom)
//   return <div>
//     {count}
//   </div>
// }
// )
// const Increase= memo(function (){
// const setCount=  useSetRecoilState(counterTom)
//     function increase(){
//      setCount(c=>c+1)
//     }
//   return <div>
//     <button onClick={increase}>Increase</button>
   
//   </div>
// })

// const Decrease= memo( function (){
//   const setCount=  useSetRecoilState(counterTom)

//   function decrease(){
//     setCount(c=>c-1)
//   }
//   return <div>
    
//     <button onClick={decrease}>Decrease</button>
//   </div>
// })

// export default App



import { useState,useMemo, memo, useEffect } from 'react'

import './App.css'


function App(){
  return(
    <>
    <Counter/>
    </>
  )
}

function Counter() {
  const [count,setCount]=useState(0)

  useEffect(()=>{
    setInterval(()=>{
      setCount(c=>c+1)
    },3000)
  },[])
  return (
    <>
    <CurrentCount />

   <Increase />
   <Decrease />
    </>
  )
}

const CurrentCount = memo(function (){

  return <div>
   1
  </div>
}
)
const Increase= memo(function (){

    function increase(){
     
    }
  return <div>
    <button onClick={increase}>Increase</button>
   
  </div>
})

const Decrease= memo( function (){


  function decrease(){
    
  }
  return <div>
    
    <button onClick={decrease}>Decrease</button>
  </div>
})

export default App
