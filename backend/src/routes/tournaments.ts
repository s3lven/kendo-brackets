import { Router } from "express";
import * as Queries from "../features/tournaments/queries";
import { handleValidationErrors, idParamValidation } from "../middleware/validate";
import { requireAuth } from "@clerk/express";

const router = Router();

// /api/v1/tournaments
router.get(
	"/",
	requireAuth(),
	Queries.getTouraments
);

export default router;
