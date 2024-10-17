import { tournaments } from "./tournaments";
import { users } from "./users";
import { participants } from "./participants";
import { brackets } from "./brackets";
import { matches } from "./matches";
import { participantsToBrackets } from "./participants-to-brackets";

export const schema = {
	users,
	tournaments,
	brackets,
	participants,
	matches,
	participantsToBrackets
};

export { tournaments, users, participants, brackets, matches, participantsToBrackets };
