import React from 'react'

const Input = ({ label, isPassword }) => {
  return (
    <div className='flex flex-col w-full gap-4'>
      <label htmlFor='user_input' className='font-[600]' >{label}</label>
      <input id='user_input' className='focus:outline-none border-b-2 w-full border-black' type={isPassword ? "password" : 'text'} />
    </div>
  )
}

export default Input;