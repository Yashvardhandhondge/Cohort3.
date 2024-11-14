import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black '>
       <h1 className='font-["Neuue_Montreal"] text-6xl leading-4.5 tracking-tighter'> Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
       </h1>
       <div className='w-full flex border-t-[1px] mt-10 bg-[#c7e564]'>
        <div className='w-1/2'>
        <h1 className='m-2 text-6xl '>Our Approach</h1>
         <button className='flex gap-10 items-center px-10 py-6 bg-zinc-900 rounded-full text-white mt-10'>Read more
            <div className='w-2 h-2 bg-zinc-500 rounded-full'></div>
         </button>
        </div>
        <div className='w-1/2 h-[70vh]  rounded-3xl  bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg")] bg-cover bg-center '></div>
       </div>
    </div>
  )
}

export default About