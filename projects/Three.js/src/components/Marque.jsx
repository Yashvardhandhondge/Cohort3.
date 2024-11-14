import React from 'react'
import { motion } from 'framer-motion'

function Marque() {
  return (
    <div className='h-screen w-full bg-[#004D43] py-10 rounded-3xl  '>
        <div className='text  border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap  gap-1 overflow-hidden'>
            <motion.h1  className='text-[17vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase '>We are Ochi</motion.h1>
            <motion.h1  className='text-[17vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase '>We are Ochi</motion.h1>
            <motion.h1  className='text-[17vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase '>We are Ochi</motion.h1>
        </div>
        
    </div>
  )
}

export default Marque