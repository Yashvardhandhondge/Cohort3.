// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import { useEffect, useState } from "react";



// function App() {
//   const [count, setCount] = useState(0)
//     function increasecount(){
//       setCount(count+1);
//     }
//   return (
//     <>
//     <div>
//       <div style={{display:"flex"}}>
//         <div style={{background:"red",borderRadius:20,width:20,height:20,paddingLeft:10,paddingTop:5}}>
//           {count}
//         </div>
//         </div>
//         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACUCAMAAAA02EJtAAAAaVBMVEX///8AAACwsLCnp6fx8fFKSkpGRkb8/Px4eHh7e3tPT0/j4+Pg4OCzs7NdXV3b29tYWFiZmZk6OjrV1dXq6urJyckgICBtbW2/v7+fn58YGBiBgYESEhJlZWWSkpJAQEAyMjKKioorKyueNN7FAAAEvklEQVR4nO2ciZKiQAyGRVtOuYYbFXDe/yGXBHDU4VBIN2xNf7VbtSK4v006SaeDu51EIpFIJH8RrWZtDe9wSm9eVXm39LS2kglC/0tp+fLDtdWMERyVB47B2nqGsVuNl0v7D3ttRUMEKC/Wfdv29RhfbHRcmQninABnvxY4aANsbVW9+KAt+XmdwGt/PT3DnGBKeY9HPBjWLfqsCOZT9HQEZlc0dP5qML+E2/9kmgxMoPQ3Za4sMhvnVDwfL1r/Gm1FLUu9zunvn9/p/KzipZsQG1zv4al4EcSK+1vXDXjYrI1MlyRiv/IpjUVJ9362hroHLKcRYmaDaZ+WtYbsrOq3gkZFaY+aIrPL1dMXt5FgWFMnWkbzlVwRqvoIMDet0nfOTSvMYVcaVwvvvvrmSLkq2vTkDeACelPz7Xvq4jfzpk+kJ8OZ8oH1ubhEWMFnBZA7xx/Z3oxLKMBU5NMFCQbaRHSMjV7y6PfQFfFpIYM59fVx+DmBezPFDms0c4Zk4ocVQn85w0eGpWiHFcLg3OZceYMrRZZdcHE6y+SY6GUsZNPmvEshZl1p1YxxUj/3qR3gW1Vxmau9wODCGaFjAWCqzkzvyByRxsog6PgzC9MafE9dVBQIvSX3EKzHE+Wu3DpDymeHnCiv0ytRK5dg0dIDlzmiMkFIALzZKw9c54hKA1Lw4rOtLYT48dbSkYD9ogQZk/L99HkkHMDdzN5E08DVHSj1jPBnpO4MKbUPKZUHUioPpFQeSKk8kFJ5IKXyQErlgZTKAymVByDV+D+kQi3PmH+5IbBqea7/r/Nql38EbOgU06cNAb03JZ2aMaBEni8oOqW5sP0gsLVqQdmZVcts/X1cGBR9ySdAJSgXUGFtdtcX3b9QzF67hjuPCyYVgE1tN94N+QdsA1k4KUJsDeEcBnBzPV5cHo9i7pvtTWcVwXDgzeHZdRWaszfXX0GTN/l5VwiJypVkOmjoSLjFVzRUqv6zpveNk7lq8NnfZPYVfMPn8fFYBbGHORB46H4slTojggxN5dHPiINA6l4CToEgdJatqHrAHSyH3mHhEBBvjabkNwo5EDqqDnRY9BZw5OGxIaYcqT8UnSr5fvOeh2u1FB5tHNBaolC7K2iO+Sb+zBqIWNRNVwUPq6qXWZ75XrP+B0Ai9HET8DSFfjWpZ4BJlag+UyRXkzoNgAQg0xgRmlb/gb/75OpQu0BILSrz2Iv6yu9Dzxc453Ny1s+JbhwdM+EhlQcX00iIHSsvqUqcU5fa7JyX1py8mTXa94Ntt2d74N3mFFw+Dp0isPUeYuNEERrK3LEYNaPAkE30eUMXoJAq5QSQH4/XSbAmI6phcQzIucbzY1yVbeHXIjSoYo/VBrHut2DziBB8YH0kkGP9YBsPtDd17EFrxfWj8OfBBsBhHXpOyII4d9nGoO66CmTvcsalq3PS0DzR2uOPoubpVfGKBsHfsVDy7PWh+wwzh239nkX79HX55F8P7cHVnrTuh3W/vJDYwcmyToGdtAe8jUz+H9jtnibGVRXfU7zb5pTWUav77Y1HzGgTUeo3qRc/6oy9LeQoQ5wy3VGrOK5UR882NfH7CN0gigJ3C5mURCKRSCQSiUQikUgkIvgHCXczQOJYA5YAAAAASUVORK5CYII=" alt="" style={{width:40}}/>
//        <button onClick={increasecount}>Increase the count</button>
//       </div>
//     </>
//   )
// }

// export default App


// export default function App(){
//  return <div>
//   Hi there
//   <Greeting name={"Hrakirat"}></Greeting>
//  </div>
// }

//  function Greeting(props){
//   return <div>
//     Hi there {props.name}
//   </div>
// }

import { useState, useEffect } from "react";

function App(){
 const [count,setCount] = useState(1);

 function increaseCount(){
  setCount(current=>current+1);
 }
 useEffect(function() { 
    console.log("above setInterval")
   const intervalId= setInterval(increaseCount,1000)
    return () => clearInterval(intervalId);
 },[])
 useEffect(function(){
 console.log("The count has been updated to" + count)

 },[count])
 return <div>
  {count}
 </div>
}

export default App