import React from 'react'

const Bento2 = () => {
  return (
    <>
      <div className='w-full h-screen flex justify-center items-center p-6 bg-slate-100 '>
            <div className='grid grid-cols-8 grid-rows-14 gap-4 h-full w-full'>
                <div className='bg-indigo-300 col-span-1 row-span-1 justify-center items-center flex '></div>
                <div className='bg-indigo-300 col-span-6 row-span-1 justify-center items-center flex rounded-3xl'></div>
                <div className='bg-indigo-300 col-span-1 row-span-1 justify-center items-center flex rounded-full border'></div>
                <div className='bg-indigo-300 col-span-6 row-span-7 justify-center items-center flex rounded-2xl'></div>
                <div className='bg-indigo-300 col-span-2 row-span-7 justify-center items-center flex rounded-lg'></div>
                <div className='bg-indigo-300 col-span-4 row-span-2 justify-center items-center flex rounded-2xl'></div>
                <div className='bg-indigo-300 col-span-2 row-span-2 justify-center items-center flex rounded-2xl'></div>
                <div className='bg-indigo-300 col-span-2 row-span-2 justify-center items-center flex rounded-2xl'></div>
                <div className='bg-indigo-300 col-span-8 row-span-3 justify-center items-center flex rounded-2xl'></div>
                <div className='bg-indigo-300 col-span-8 row-span-1 justify-center items-center flex rounded-2xl'></div>
            </div>
      </div>
    </>
  )
}

export default Bento2
