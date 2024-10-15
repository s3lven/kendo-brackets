import { Router } from "express";
import * as Queries from "../features/users/queries";
import { handleValidationErrors, idParamValidation } from "../middleware/validate";
import { requireAuth } from "@clerk/express";

const router = Router();

// /api/v1/users
router.get(
	"/",
	requireAuth(),
	Queries.getUsers
);

// /api/v1/users/id
router.get(
	"/:id",
	requireAuth(),
    idParamValidation,
    handleValidationErrors,
	Queries.getUserById
);

export default router;
