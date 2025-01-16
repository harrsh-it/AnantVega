import React from 'react'

const Button = ({label}) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 border font-lastica   bg-[#6c7686] rounded-full text-white tracking-widest leading-snug'
    style={{ wordSpacing: '0.3em',
      fontWeight: 900,
      
      }}>
        {label}
    </button>
  )
}

export default Button