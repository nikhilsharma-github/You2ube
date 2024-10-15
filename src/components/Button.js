import React from 'react'

const Button = ({name}) => {
  return (
    <div className='sm:rounded-lg space-x-1 m-1 md:m-2 p-1 md:p-2 cursor-pointer rounded-md text-xs md:text-sm bg-slate-600 '>{name}</div>
  )
}

export default Button