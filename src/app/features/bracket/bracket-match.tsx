import React from 'react'
import BracketSlot from './bracket-slot'

const BracketMatch = () => {
  return (
    <div className='w-full flex flex-col justify-center gap-[2px]'>
        <BracketSlot variant='Red'/>
        <BracketSlot variant='White'/>
    </div>
  )
}

export default BracketMatch