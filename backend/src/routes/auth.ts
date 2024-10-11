import { Router } from "express";
import * as Mutators from "../features/auth/mutators";
import {
	handleValidationErrors,
	loginValidation,
	registerValidation,
} from "../middleware/validate";
import passport from "passport";
import { authenticateJwt } from "../middleware/authenticate-jwt";

const router = Router();

// /api/v1/register
router.post(
	"/register",
	registerValidation,
	handleValidationErrors,
	Mutators.register
);

// /api/v1/login
router.post(
	"/login",
	loginValidation,
	handleValidationErrors,
	passport.authenticate("local", { session: false }),
	Mutators.login
);

// /api/v1/logout
router.get("/logout", Mutators.logout);

// /api/v1/refresh-token
router.get("/refresh-token", Mutators.refreshToken);

// /api/v1/verify-auth
router.get("verify-auth", authenticateJwt, Mutators.verifyAuth);

// /api/v1/google
router.get(
	"/google",
	passport.authenticate("google", { scope: ["profile", "email"] })
);

// /api/v1/google/callback
router.get(
	"/google/callback",
	passport.authenticate("google", {
		session: false,
		successRedirect: "http://localhost:3000/dashboard",
		failureRedirect: "http://localhost:3000/login",
	})
);

export default router;
