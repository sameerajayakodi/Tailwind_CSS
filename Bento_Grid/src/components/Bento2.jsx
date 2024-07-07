import React from 'react'

const Bento2 = () => {
  return (
    <>
      <div className='w-full h-screen flex justify-center items-center p-6 bg-slate-100 '>
            <div className='grid grid-cols-8 grid-rows-14 gap-6 h-full w-full'>
                <div className='bg-indigo-300 col-span-1 row-span-1 justify-center items-center flex '>0</div>
                <div className='bg-indigo-300 col-span-6 row-span-1 justify-center items-center flex rounded-3xl'>1</div>
                <div className='bg-indigo-300 col-span-1 row-span-1 justify-center items-center flex rounded-full border'>2</div>
                <div className='bg-indigo-300 col-span-6 row-span-6 justify-center items-center flex rounded-2xl'>3</div>
                <div className='bg-indigo-300 col-span-2 row-span-7 justify-center items-center flex rounded-lg'>4</div>
                <div className='bg-indigo-300 col-span-6 row-span-1 justify-center items-center flex rounded-2xl'>5</div>
                <div className='bg-indigo-300 col-span-4 row-span-2 justify-center items-center flex rounded-2xl'>6</div>
                <div className='bg-indigo-300 col-span-2 row-span-2 justify-center items-center flex rounded-2xl'>7</div>
                <div className='bg-indigo-300 col-span-2 row-span-2 justify-center items-center flex rounded-2xl'>8</div>
                <div className='bg-indigo-300 col-span-8 row-span-3 justify-center items-center flex rounded-2xl'>10</div>
                <div className='bg-indigo-300 col-span-8 row-span-1 justify-center items-center flex rounded-2xl'>9</div>
            </div>
      </div>
    </>
  )
}

export default Bento2
