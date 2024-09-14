import React from 'react'
import BracketSlot from './bracket-slot'
import { useCombinedStore } from './stores/bracket-view-store'

type BracketMatchProps = {
  playerSequences: number[]
}

const BracketMatch = ({playerSequences} : BracketMatchProps) => {
  const {slots} = useCombinedStore()

  // Look up the players
  const redPlayer = slots.find((player) => player.sequence == playerSequences[0])
  const whitePlayer = slots.find((player) => player.sequence == playerSequences[1])


  // Given two players and their seeding (sequence), render the match
  console.log("Red Player: ", redPlayer?.player.name)
  console.log("White Player: ", whitePlayer?.player.name)

  return (
    <div className='w-full flex flex-col justify-center gap-[2px]'>
        <BracketSlot variant='Red'/>
        <BracketSlot variant='White'/>
    </div>
  )
}

export default BracketMatch