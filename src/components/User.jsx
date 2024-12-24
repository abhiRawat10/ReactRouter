import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    let {userId}=useParams();
  return (
    <div className='text-3xl h-28 bg-gray-700 text-center p-4'>{`params=${userId}` }</div>
  )
}

export default User