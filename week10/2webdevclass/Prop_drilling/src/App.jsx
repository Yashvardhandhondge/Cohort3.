import { useState,createContext,useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const BulbContext = createContext();

function BulbProvider({children}){
  const [bulbon,setBulbOn]= useState(true);
  return(
  <BulbContext.Provider value={{
    bulbon:bulbon,
    setBulbOn:setBulbOn
  }}>
    {children}
     </BulbContext.Provider>
  )
}


function App() {
const [bulbon,setBulbOn]= useState(true);

  return (
    <>
    <BulbProvider >
      <Light bulbon={bulbon} setBulbOn={setBulbOn}></Light>
      </BulbProvider>
    </>
  )
}
function Light(){
  return <div>
    <LightBulb ></LightBulb>
    <LightSwitch></LightSwitch>
  </div>
}

function LightBulb(){
  const {bulbon} = useContext(BulbContext)
 return <div>
  {bulbon? "Bulb on":"BulbOff"}
 </div>
}

function LightSwitch(){
  const {bulbon,setBulbOn} = useContext(BulbContext);
  function toggle() {
  
    setBulbOn(!bulbon)
    
  }

  return <div>
    <button onClick={toggle}>Toggle the bulb</button>
  </div>
}

export default App
