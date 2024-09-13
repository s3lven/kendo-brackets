import { PlayerColorType } from '@/types/bracket_t'
import React from 'react'

type BracketSlotProps = {
    variant: PlayerColorType
}

const BracketSlot = ({ variant } : BracketSlotProps) => {
  return (
    <div className='w-full max-h-[27px] h-full flex items-center font-poppins'>
        <div className={`w-[28px] max-h-[27px] h-full flex items-center justify-center 
            ${variant === "Red" ? "bg-error rounded-tl text-white" : "bg-white text-black rounded-bl"}`}>
            <p className='w-full h-full text-label uppercase text-center'>1</p>
        </div>
        <div className={`w-full max-h-[27px] h-full flex items-center justify-center pl-2 bg-neutral8
            ${variant === "Red" ? "rounded-tr " : "rounded-br"}`}>
            <div className='w-full h-full flex items-center'>
                <p className='text-desc text-white'>Team 1</p>
            </div>
            <div className='w-9 h-full gap-1 flex items-center justify-center'>
                <div className='w-full h-full flex items-center justify-center'>
                    <p className='text-desc text-white w-4'>X</p>
                </div>
                <div className='w-full h-full flex items-center justify-center'>
                    <p className='text-desc text-white w-4'>X</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BracketSlot