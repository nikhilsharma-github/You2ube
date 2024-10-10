import React from 'react'

const Button = ({name}) => {
  return (
    <div className='px-4 py-2 m-2 rounded-lg cursor-pointer bg-gray-200'>{name}</div>
  )
}

export default Button