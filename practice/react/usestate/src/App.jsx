// import{ useState } from "react";

// function Counter(){
//   const [count,setcount] = useState(0);

//   return <div>
//     <p>Count:{count}</p>
//     <button onClick={()=>setcount(count+1)}>Increment</button>
//   </div>
// }
// function App(){
//   return <div>
//     <Counter></Counter>
//   </div>
// }

// export default App

// import { useState } from "react";

// function App(){
//   return <div className="bg-slate-300 min-h-screen">
//     <div>
//    <Togglemessage></Togglemessage>
//    </div>
//   </div>
// }

// function Togglemessage(){
//   let [notificationCount,setNotificationCount] = useState(0);
//   console.log("re-render");
//   function increment(){
//     setNotificationCount(notificationCount+1);

//   }
//   return <div>
//     <button onClick={increment}>Incraese count</button>
//     <p>{notificationCount}</p>
//   </div>
// }
// export default App


//Post Component

import PostComponent from "./post"
function App(){
  return <>
  
   <PostComponent
   name="Yashvardhan Dhondge"
   image="https://media.licdn.com/dms/image/v2/D4D35AQE-3fo-8Nwfzg/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1711386618170?e=1729688400&v=beta&t=nGiIVVHIXn022HehQvDn1B8eZNUbus0-saSJHRbTYg4"
   subtitle="Software devloper"
   description="This is my first post"
   time="10 minutes ago"

   ></PostComponent>
     
     <PostComponent
   name="Yashvardhan Dhondge"
   image="https://media.licdn.com/dms/image/v2/D4D35AQE-3fo-8Nwfzg/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1711386618170?e=1729688400&v=beta&t=nGiIVVHIXn022HehQvDn1B8eZNUbus0-saSJHRbTYg4"
   subtitle="Software devloper"
   description="This is my first post"
   time="10 minutes ago"

   ></PostComponent>
  </>
}
export default App

