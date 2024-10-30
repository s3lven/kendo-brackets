import { Router } from "express";
import * as Queries from "../features/brackets/queries";
import * as Mutations from '../features/brackets/mutations'
import { handleValidationErrors, idParamValidation } from "../middleware/validate";
import { requireAuth } from "@clerk/express";

const router = Router();

// /api/v1/brackets
router.get(
	"/",
	requireAuth(),
	Queries.getAllBrackets
);

// /api/v1/brackets/:id
router.get(
	"/:id",
	requireAuth(),
    idParamValidation,
    handleValidationErrors,
	Queries.getBracketsByTournament
);

// /api/v1/brackets/info/:code
router.get(
	"/info/:code",
	Queries.getBracketInfo
)

// /api/v1/brackets/:code/update-bracket
router.post(
	"/:bracketCode/update-bracket",
	Mutations.updateBracket
)

export default router;
