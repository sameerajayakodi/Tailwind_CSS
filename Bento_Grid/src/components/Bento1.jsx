import React from 'react'

const Bento1 = () => {
  return (
    <>
    <div className='p-6 h-screen w-full flex justify-center items-center'>
        <div className='grid grid-cols-10 grid-rows-4 gap-10 h-full w-full'>
            <div className='col-span-4 row-span-3 bg-indigo-200 flex rounded-3xl justify-center items-center'></div>
            <div className='col-span-4 row-span-1 bg-indigo-200 flex rounded-3xl justify-center items-center'></div>
            <div className='col-span-2 row-span-1 bg-indigo-200 flex rounded-3xl justify-center items-center'></div>
            <div className='col-span-3 row-span-2 bg-indigo-200 flex rounded-3xl justify-center items-center'></div>
            <div className='col-span-3 row-span-2 bg-indigo-200 flex rounded-3xl justify-center items-center'></div>
            <div className='col-span row-span bg-indigo-200 flex rounded-3xl justify-center items-center'></div>
            <div className='col-span row-span bg-indigo-200 flex rounded-3xl justify-center items-center'></div>
            
        </div>
    </div>
    </>
  )
}

export default Bento1
