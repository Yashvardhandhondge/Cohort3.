
import React from 'react'
import { useForm } from 'react-hook-form'

function Form({ handleFormSubmitData }) {
  const { register, handleSubmit,reset } = useForm()
   const handleFormSubmit= (data) =>{
    
    handleFormSubmitData(data)
    reset();
  }


  return (
    <div className='mt-10 flex justify-center'>
      <form onSubmit={handleSubmit(handleFormSubmit)} className='flex gap-10'>
        <input {...register('name')} className='rounded-md px-2 py-2 text-base font-semibold outline-none' type="text" placeholder='name' />
        <input {...register('email')} className='rounded-md px-2 py-2 text-base font-semibold outline-none' type="text" placeholder='email' />
        <input {...register('image')} className='rounded-md px-2 py-2 text-base font-semibold outline-none' type="text" placeholder='imageurl' />
        <input type="submit" className='rounded-md px-2 py-1 text-white font-semibold bg-blue-500' />
      </form>
    </div>
  )
}

export default Form
