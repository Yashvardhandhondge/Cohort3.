// Cards.jsx
import React from 'react'
import Card from './Card'

function Cards({ users,handleRemove }) {
  return (
    <div className='w-full max-h-96 h-96 overflow-auto p-4 flex justify-center gap-4 flex-wrap'>
      {users.map((user, index) => (
        <Card key={index} user={user} handleRemove={handleRemove} id={index} /> 
      ))}
    </div>
  )
}

export default Cards
