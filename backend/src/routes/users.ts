import { Router } from "express";
import * as Queries from "../features/users/queries";
import { authenticateJwt } from "../middleware/authenticate-jwt";
import { handleValidationErrors, idParamValidation } from "../middleware/validate";

const router = Router();

// /api/v1/users
router.get(
	"/",
	authenticateJwt,
	Queries.getUsers
);

// /api/v1/users/id
router.get(
	"/:id",
	authenticateJwt,
    idParamValidation,
    handleValidationErrors,
	Queries.getUserById
);

export default router;
