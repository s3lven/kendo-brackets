import { Router } from "express";
import * as Queries from "../features/users/queries";
import { authenticateJwt } from "../middleware/authenticate-jwt";

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
	Queries.getUserById
);

export default router;
