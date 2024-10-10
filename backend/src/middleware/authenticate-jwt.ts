import { NextFunction, Request, Response } from "express";
import passport from "passport";

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
				throw res.status(403).json({
					message: "User's access token is not authenticated",
				});
            req.user = user
			next();
		}
	)(req, res, next);
};
