import BracketPanel from '@/app/features/bracket/bracket-panel'
import { dummyTournamentData } from '@/types/bracket_t'
import React from 'react'

type EditBracketPageProps = {
    params: {
      tournament: string,
      bracketCode: string
    }
}

const EditBracketPage = ({ params } : EditBracketPageProps) => {
  const tournamentData = dummyTournamentData.find((tournament) => {
    // This is VERRYYYY specific, and will change with the back end implementation
    const searchTerm = params.tournament.replace('%20', ' ')
    // console.log(tournament.tournamentName)
    // console.log(searchTerm)
    return tournament.tournamentName == searchTerm
  }) 
  const bracketData = tournamentData?.brackets.find((bracket) => bracket.bracketCode == params.bracketCode)
  // console.log(params)
  // console.log(tournamentData)
  console.log(bracketData)

  return (
    <div className='w-full h-full flex gap-5 bg-shade2'>
      <BracketPanel bracketData={bracketData}/>
    </div>
  )
}

export default EditBracketPage