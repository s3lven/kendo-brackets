import { tournaments } from "./tournaments";
import { users } from "./users";
import { participants, participantsRelations } from "./participants";
import { brackets, bracketRelations } from "./brackets";
import { matches } from "./matches";
import { participantsToBrackets, participantsToBracketsRelations } from "./participants-to-brackets";

export const schema = {
	users,
	tournaments,
	brackets,
	participants,
	matches,
	participantsToBrackets,
	participantsRelations,
	bracketRelations,
	participantsToBracketsRelations
};

export { tournaments, users, participants, brackets, matches, participantsToBrackets };
