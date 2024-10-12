import { useEffect } from "react";
import { useState } from "react"

export default  function App(){
  const [courrenTab,setCorrentTab]=useState(1);
  const [tabdata,setTabdata] = useState({});
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    setLoading(true)
    async function fetchTabData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/" + courrenTab);
        const json = await res.json();
        setTabdata(json);
      } catch (error) {
        console.error("Error fetching tab data:", error);
      }finally{
        setLoading(false)
      }
    }
  
    fetchTabData()
   
  },[courrenTab])

  return <div>
    <button onClick={function(){
      setCorrentTab(1)
    }} style={{color:courrenTab==1 ? "red":"black"}}>Todo1</button>
    <button onClick={function(){
      setCorrentTab(2)
    }} style={{color:courrenTab==2 ? "red":"black"}}>Todo2</button>
    <button onClick={function(){
      setCorrentTab(3)
    }} style={{color:courrenTab==3 ? "red":"black"}}>Todo3</button>
    <button onClick={function(){
      setCorrentTab(4)
    }} style={{color:courrenTab==4 ? "red":"black"}}>Todo4</button>
    <br />
   {loading ? "Loading .." : tabdata.title}
  </div>
}