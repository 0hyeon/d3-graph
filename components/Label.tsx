import React from 'react'

const Label = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <div className='flex items-center justify-center text-2xl bg-transparent font-sans my-10' >{children}</div>
  )
}

export default Label