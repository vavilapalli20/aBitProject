import React from 'react'

const DashBoard = () => {
  return (
    <div className='flex justify-between ml-[86px] pt-[118px] '>
        <div>
            <h1 className='text-2xl font-bold '> Releases</h1>
            <p className='mt-3 italic'> Videos that you upload in collaboration with aBit appear here.</p>
        </div>
        <ul className='flex'>
            <div className='pr-20 border-l border-gray-400 pl-4'>
                <li>1</li>
                <li> Shared </li>
                <li> Videos</li>
            </div>
            <div className='pr-20 border-l border-gray-400 pl-4'>
                <li>$9510</li>
                <li> Funds </li>
                <li> Raised</li>
            </div>
            <div className='pr-16 border-l border-gray-400 pl-4'>
                <li>317</li>
                <li> Co-owner</li>
                <li>community</li>
            </div>
            <div className='pr-24 border-l border-gray-400 pl-4'>
                <li>$3804</li>
                <li> Co-owner</li>
                <li> Earnings</li>
            </div>
        </ul>
    </div>
  )
}

export default DashBoard