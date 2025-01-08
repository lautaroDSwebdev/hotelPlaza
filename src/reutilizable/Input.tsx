import React from 'react'


interface InputType extends React.InputHTMLAttributes<HTMLInputElement> {}

export const InputReusable = (props: InputType) => {
  return (
    <input className='text-blue-500' {...props}></input>
  )
}
