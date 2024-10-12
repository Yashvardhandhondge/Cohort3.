import { useEffect, useState } from "react";

function App(){
  const [currentTab,setCurrentTab]= useState("feed");

useEffect(function(){
  console.log("send backend to get data for " + currentTab)
},[currentTab])

  return <div>
    <button onClick={function(){
      setCurrentTab("feed")
    }} style={{color:currentTab=="feed"?"black":"red"}}>feed</button>
    <button onClick={function(){
      setCurrentTab("notification")
    }} style={{color:currentTab=="notification"?"black":"red"}}>Notification</button>
    <button onClick={function(){
      setCurrentTab("message")
    }} style={{color:currentTab=="message"?"black":"red"}}>message</button>
    <button onClick={function(){
      setCurrentTab("jobs")
    }} style={{color:currentTab=="jobs"?"black":"red"}}>Jobs</button>
  </div>
}
export default App