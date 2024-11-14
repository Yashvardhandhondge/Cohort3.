
import React from 'react'

function Card({ user,handleRemove,id}) { 
  return (
    <div className='w-52 h-full bg-zinc-100 rounded-lg'>
      <div className='image w-[3vw] h-[3vw] rounded-full bg-zinc-200'>
        <img src={user.image} className='w-full h-full object-cover' alt="User" />
      </div>
      <h1 className='mt-1 text-xl font-semibold'>{user.name}</h1>
      <h4 className='opacity-40 font-semibold text-sm'>{user.email}</h4>
      <p className='mt-2 text-center text-xs font-semibold leading-1 tracking-tight'>Lorem ipsum dolor sit amet.</p>
      <button onClick={()=>handleRemove(id)} className='px-3 py-1 bg-red-500 text-xs rounded-md font-semibold text-white mt-4 text-center ml-5'>Remove It</button>
    </div>
  )
}

export default Card
