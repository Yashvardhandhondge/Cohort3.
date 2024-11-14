import { useState } from "react"
import Card from "./Component/Card"
import Navbar from "./Component/navbar"

function App() {

  const data =[
    {image:'https://plus.unsplash.com/premium_photo-1666901328734-3c6eb9b6b979?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D',name:'Changgler',added:false, artist:'Lan dey ray'},
    {image:'https://plus.unsplash.com/premium_photo-1670590785994-ab5e8a2ccd61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D',name:'One day',added:false, artist:'Lan dey ray'},
    {image:'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D',name:'Shub',added:false, artist:'Lan dey ray'},
    {image:'https://images.unsplash.com/photo-1508138221679-760a23a2285b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D',name:'One Love',added:false, artist:'Lan dey ray'},
    {image:'https://plus.unsplash.com/premium_photo-1664392248318-4e1d9361726e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tfGVufDB8fDB8fHww',name:'what ',added:false, artist:'Lan dey ray'},
    {image:'https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fHww',name:'motivation',added:false, artist:'Lan dey ray'},
    {image:'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww',name:'Good one',added:false, artist:'Lan dey ray'}
  ]
  const [songData,setSongData] = useState(data);
  const handleclick = (index)=>{
  setSongData((prev)=>{
    return prev.map((item,itemindex)=>{
      if(itemindex === index ) return {...item,added : !item.added}
      return item
    })
  })
  }
  
  return (
    <>
      <div className='w-full h-screen bg-zinc-300 gap-4 items-center justify-center'>
      <Navbar data={songData}/>
      <div className="px-20 flex gap-10  flex-wrap">
{songData.map((obj,index)=>(
   <Card data={obj} handleclick={()=>handleclick(index)} key={index} />
))}
    
      </div>
      </div>
    </>
  )
}

export default App
