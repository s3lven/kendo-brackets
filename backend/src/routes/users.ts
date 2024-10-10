import { Router } from "express";
import * as Queries from "../features/users/queries";
import passport from "passport";

const router = Router();

// /api/v1/users
router.get(
	"/",
	passport.authenticate("jwt", { session: false }),
	Queries.getUsers
);

// /api/v1/users/id
router.get(
	"/:id",
	passport.authenticate("jwt", { session: false }),
	Queries.getUserById
);

export default router;
