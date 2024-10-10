import passport from "passport";
import {
	Strategy,
	StrategyOptionsWithRequest,
	VerifiedCallback,
} from "passport-jwt";
import { ExtractJwt } from "passport-jwt";
import { db } from "../../database";
import { eq } from "drizzle-orm";
import { Request } from "express";
import { users } from "../../database/schema";

const JWTOptions: StrategyOptionsWithRequest = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	passReqToCallback: true,
	secretOrKey: process.env.ACCESS_TOKEN_SECRET as string,
};

passport.use(
	new Strategy(
		JWTOptions,
		async (req: Request, jwt_payload: any, done: VerifiedCallback) => {
			try {
				const user = await db.query.users.findFirst({
					where: eq(jwt_payload.email, users.email),
				});

				if (!user) {
					throw new Error("No user found");
				}

				return done(null, user);
			} catch (error) {
				console.error(error);
				return done(error, null);
			}
		}
	)
);
