import { useState } from "react";

function App(){
  const [showTimer,setShowTimer] = useState(true);

  return <div style={{backgroundColor:"gray",display:"flex"}}>
    <Card>
    <div style={{color:"green"}}>What do you want to post <input type="text" /> </div>
    </Card>
      <Card children ={<div>hi there </div>} />
      
  </div>
}

function Card({children}){
  return <div style={{background:"White",borderRadius:10,color:"black",padding:10,margin:10}}>
        {children}
  </div>
}

export default App