import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";
function Landingpage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
     <div className='textstructure mt-20 px-20'>
   
   {["We Create","Eye Opening","Presentations"].map((item,index)=>{
    return <div className='masker overflow-hidden'>
        <div className='w-fit flex '>
            {index === 1 && (<div className='w-[9vw] h-[-5.5vw]  rounded p-4 relative-top-[-2vw]' ></div>)}
        <h1 className='uppercase text-[7.5vw] leading-[7vw]  font-bold  font-["Founders_Grotesk_X-Condensed"]'>{item}</h1>
    </div>
    </div>
   })}
   
     </div>
   <div className='border-t-[1px] border-zinc-700 mt-12 flex justify-center  px-4 py-4 '>
    {["For public and private companies "," From the first pitch to IPO"].map((item,index)=>(
        <p className='text-md font-light tracking-tight leading-none flex justify-between items-center  px-5 py-5'>{item}</p>
    ))}
     <div className='start flex items-center gap-5'>
    <div className='px-4 py-4 border-[1px] border-zinc-500 font-light rounded-full text-md uppercase '>Start the project</div>
    <div className='w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-zinc-300'>
<span className='rotate-[45deg]'>
    <FaLongArrowAltUp />

</span>

    </div>
   </div>
   </div>
    </div>
  )
}

export default Landingpage