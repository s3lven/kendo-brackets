import BracketMatch from "./bracket-match"

const BracketRound = () => {
  return (
    <div className="w-full max-w-[200px] flex flex-col items-between gap-4">
        {new Array(32).fill(null).map((_, index) => (
            <BracketMatch key={}/>
        ))}
    </div>
  )
}

export default BracketRound