import React from 'react'
import DashBoard from './DashBoard'
import TokenCard from './TokenCard'
import AddCard from './AddCard'

const NewReleases = () => {
  return (
    <div>
        <DashBoard />
        <div className='flex'>
            <AddCard />
            <TokenCard />
        </div>
    </div>
  )
}

export default NewReleases