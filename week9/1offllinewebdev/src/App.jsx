// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//   <div style={{backgroundColor:"#dfe6e9",height:"100vh"}}>
//     <div style={{display:'flex',justifyContent:'center'}}>
//    <div>
// <PostComponent></PostComponent>
// <br />
// <PostComponent></PostComponent>
// <br />
// <PostComponent></PostComponent>
// </div>
//   </div>
//   </div>
//   )
// }

// const style ={width:200,backgroundColor:"White",borderRadius:10,borderColor:"gray",borderWidth:1,padding:20}

// function PostComponent(){
 
//   return  <div style={style}>
//    <div style={{display:'flex'}}>
  
// <img src="https://media.licdn.com/dms/image/v2/D5603AQHQuP-rTvyc1w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1701339457970?e=1733961600&v=beta&t=O_Bdw53iufs6q9NrNtJT0VD1ZIRNJHxMLnrfUpUWDKs" alt="" style={{
//   width:20,
//   height:20,
//   borderRadius:20
// }} />
//   <div style={{fontSize:10,marginLeft:10}}>
//     <b>
//       Janhavi kendre
//     </b>
//     <div>525 followers</div>
//     <div>12min</div>
//   </div>
//   </div>
//   <div style={{fontSize:12}}>
//   🌟 Just completed a fun mini-project! 🌟
//   </div>
//   </div>
// }

// export default App

import { PostComponent } from './Post'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

       const [posts,setPosts] = useState([])


      const postcomponent = posts.map(post=><PostComponent
          name={post.name}
          subtitle={post.subtitle}
          time={post.time}
          image={post.image}
          description={post.description}
        ></PostComponent>)

function addpost(){
           
 setPosts([...posts,{
  name:"Janhavi kendre",
  subtitle:"525 followers",
  time:"2m ago",
  image:"https://media.licdn.com/dms/image/v2/D5603AQHQuP-rTvyc1w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1701339457970?e=1733961600&v=beta&t=O_Bdw53iufs6q9NrNtJT0VD1ZIRNJHxMLnrfUpUWDKs",
  description:"Today i am going to join as intern "
},{
  name:"Yashvardhan",
  subtitle:"102 followers",
  time:"2 min ago",
  image:"https://media.licdn.com/dms/image/v2/D4D35AQE-3fo-8Nwfzg/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1711386618170?e=1729234800&v=beta&t=DREzwvrccxnmmwuc0eH8aIypppdujfaK3IpLbPgLoiE",
  description:"Learning react and rust"
 }])
   }

return ( <div style={{backgroundColor:"#dfe6e9",height:"100vh"}}>
     <ToggleMessage></ToggleMessage>
     <Notification></Notification>
    <div style={{display:'flex',justifyContent:'center'}}>
   <div>
   {postcomponent}
  <button onClick={addpost}>Add Post</button>
  </div>
  </div>
  </div>
  )
}


const ToggleMessage = () => {
const [isVisible,setIsVisible] = useState(false);

return(
  <div>
    <button onClick={()=>setIsVisible(!isVisible)}>
      Toggle Message
    </button>
    {isVisible && <p>This message is conditional rendrered!</p>}
  </div>
)
}
const Notification = () => {
  const [notificationcount,setNotificationCount] = useState(false);
  function increment(){
    setNotificationCount(notificationcount+1);
  }
  return(
    <div>
      <button onClick={increment}>
        Increase count
      </button>
      {notificationcount}
    </div>
  )
  }

  export default App
