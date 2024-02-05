import React from 'react'

const Footer = () => {
    const doThis=()=>{
        console.log("you are clicked");
    }
  return (
    <div className='flex justify-between mt-24 px-24 mb-20 absolute top-[1400px] w-full pb-24 '>
        <div>
            <h1 className='font-bold text-lg'>aBit</h1>
            <p className='w-44 text-xs'>Changing The Way In Which Creators And Fans Interact</p>
        </div>
        <ul className='text-xs font-bold border-l border-black pl-4'>
            <li className='cursor-pointer'onClick={doThis} >Home</li>
            <li className='cursor-pointer'onClick={doThis}>Are you a Creator?</li>
            <li className='cursor-pointer'onClick={doThis}>Support</li>
        </ul>
    </div>
  )
}

export default Footer