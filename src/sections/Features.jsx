import React from 'react'
import { statistics } from '../constants';

const Features = () => {
  return (
    <section className='bg-[#0d3644]  '>
      <div className='w-full h-10'></div>
    <div className="flex justify-center items-start flex-wrap w-[1200px] max-xl:w-[1100px]  mx-24  gap-28 border-spacing-6  border-gray-300 rounded-full shadow-2xl shadow-gray-400 bg-white ring-">
      {statistics.map((stat, 
      index)=>(
        <div className='py-10 px-4'>
          <p className='text-7xl font-savedbyzero font-bold pb-3'>{stat.value}</p>
          <p className='leading-7 font-montserrat text-slate-gray text-4xl flex flex-col '>
            {stat.label.split(' ').map((word, wordIndex)=>(
              <span key={wordIndex} className='pb-2'>{word}</span>
            ))}</p>
        </div>
      ))}
    </div> 

    <div>
      <div className='h-20'></div>
    </div>
    </section>

  )
  
}

export default Features


