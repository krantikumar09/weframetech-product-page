import React from 'react'

const Title = ({heading, linkText}) => {
  return (
    <div className='w-full flex flex-col md:flex-row items-center justify-between mb-8 gap-4'>
        <h2 className='font-playfair text-2xl md:text-3xl font-[500] text-bodyPrimary leading-normal text-center md:text-start'>{heading}</h2>
        <p className='font-cabinet text-sm md:text-base font-[500] text-bodyPrimary underline cursor-pointer uppercase'>{linkText}</p>
    </div>
  )
}

export default Title