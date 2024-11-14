import React from 'react'

function Card({data,handleclick}) {
    const {image,artist,added,name} = data;
    
  return (
    <div className='w-60 rounded-md bg-zinc-100 p-4 flex gap-4 pb-10 relative'>
        <div className='w-20 h-20 bg-orange-600 rounded-lg'>
<img src={image} className='w-full h-full object-cover' alt="" />
        </div>
        <div className=''>
            <h3 className='text-xl leading-none font-semibold '>{artist}</h3>
            <h6 className='text-sm'>{name}</h6>

        </div>
        <button
  onClick={handleclick}
  className={`px-4 py-3 whitespace-nowrap ${added === false ? 'bg-red-500' : 'bg-green-500'} absolute bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%] text-white text-xm rounded-full`}
>
  {added === false ? 'Add to Favourites' : 'Added'}
</button>
    </div>
  )
} 

export default Card 