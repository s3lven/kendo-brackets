import { Router } from "express";
import * as Queries from "../features/brackets/queries";
import { handleValidationErrors, idParamValidation } from "../middleware/validate";
import { requireAuth } from "@clerk/express";

const router = Router();

// /api/v1/brackets
router.get(
	"/",
	requireAuth(),
	Queries.getAllBrackets
);

// /api/v1/brackets/id
router.get(
	"/:id",
	requireAuth(),
    idParamValidation,
    handleValidationErrors,
	Queries.getBracketsByTournament
);

router.get(
	"/info/:code",
	Queries.getBracketInfo
)

export default router;
