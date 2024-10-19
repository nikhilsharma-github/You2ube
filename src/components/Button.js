import React from 'react'

const Button = ({name}) => {
  return (
    <div className='sm:rounded-lg space-x-1 m-1 md:m-2 p-0.5 md:p-2 cursor-pointer rounded-md text-xs font-thin md:font-base md:text-sm bg-slate-600 transition-transform duration-200 hover:scale-105 hover:shadow-md hover:bg-gray-800'>{name}</div>
  )
}

export default Button