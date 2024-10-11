import { NextFunction, Request, Response } from "express";
import passport from "passport";
import { ForbiddenException } from "../utils/error-handling/http.exceptions";

export const authenticateJwt = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	passport.authenticate(
		"jwt",
		{ session: false },
		(err: any, user: any, info: any) => {
			if (err) return next(err);
			if (!user)
				throw new ForbiddenException(
					"User's access token is not authenticated"
				);
			req.user = user;
			next();
		}
	)(req, res, next);
};
