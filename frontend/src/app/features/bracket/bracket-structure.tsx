import { Match, Slot } from "@/types/bracket_t";
import BracketRound from "./components/bracket-view/bracket-round";
import { useSlots } from "./stores/bracket-view-store";
import { useEffect } from "react";
import { useMatchesStore } from "./stores/matches-store";
import { useShallow } from "zustand/react/shallow";

const BracketStructure = () => {
  const slots = useSlots();
  const slotCount = slots.length;
  const rounds = Math.ceil(Math.log2(slotCount));

  const { matches, setMatches } = useMatchesStore(
    useShallow((state) => ({
      matches: state.rounds,
      setMatches: state.setTournament,
    }))
  );

  useEffect(() => {
    // Algorithm to construct number mapping of matches
    const createMapping = () => {
      // If there isn't enough players, then return nothing
      if (slotCount < 2) {
        return [];
      }

      let matches: (Slot | null)[][] = [
        [
          slots.find((player) => player.sequence === 1)!,
          slots.find((player) => player.sequence === 2)!,
        ],
      ];

      for (let round = 1; round < rounds; round++) {
        const roundMatches = [];
        const sum = Math.pow(2, round + 1) + 1;

        for (let i = 0; i < matches.length; i++) {
          let player1 = changeIntoBye(matches[i][0]!.sequence);
          let player2 = changeIntoBye(sum - matches[i][0]!.sequence);
          roundMatches.push([player1, player2]);
          player1 = changeIntoBye(sum - matches[i][1]!.sequence);
          player2 = changeIntoBye(matches[i][1]!.sequence);
          roundMatches.push([player1, player2]);
        }
        matches = roundMatches;
      }

      // console.log("Mapping of Slots:", matches)
      const bracket = matches.map((match, index) => ({
        id: `R1-M${index}`,
        player1: match[0],
        player2: match[1],
        player1Score: [],
        player2Score: [],
        winner: null,
      }));
      // console.log("Mapping of Matches:", bracket)
      return bracket;
    };

    // Helper function to mark BYE rounds in the Slots mapping
    const changeIntoBye = (seed: number) => {
      return seed <= slotCount
        ? slots.find((player) => player.sequence === seed)!
        : null;
    };

    // Algorithm to take the initial mapping and move the bye round sup
    const createInitialMatches = () => {
      const initialBracket: Match[][] = [];
      const initialMatches = createMapping().length;

      // Push the initial bracket
      initialBracket.push(createMapping());

      // Fill the rest of the rounds
      for (let i = 1; i < rounds; i++) {
        initialBracket.push(
          new Array(initialMatches / Math.pow(2, i)).fill(null)
        );
      }

      const filledBracket = initialBracket.map((round, roundIndex) => {
        return round.map((match, matchIndex) => {
          if (match === null) {
            return {
              id: `R${roundIndex}-M${matchIndex}`,
              player1: null,
              player2: null,
              player1Score: [],
              player2Score: [],
              winner: null,
            };
          } else return match;
        });
      });

      filledBracket[0].forEach((match, index) => {
        const nextRoundMatch = Math.floor(index / 2);
        if (match?.player1 === null) {
          console.log(`Detected BYE round at match ${index}`);
          filledBracket[1][nextRoundMatch]!.player2 = match.player2;
          match.id = "NULL";
        } else if (match?.player2 === null) {
          console.log(`Detected BYE round at match ${index}`);
          filledBracket[1][nextRoundMatch]!.player1 = match.player1;
          match.id = "NULL";
        }
      });

      return filledBracket;
    };

    setMatches(createInitialMatches());
  }, [rounds, setMatches, slotCount, slots]);

  console.log("BracketStructure rendered");
  console.log("matches from MatchesStore", matches);

  return (
    <div className="w-full flex ">
      {matches.map((match, index) => (
        <BracketRound key={index} round={index + 1} roundMatches={match} />
      ))}
    </div>
  );
};

export default BracketStructure;
