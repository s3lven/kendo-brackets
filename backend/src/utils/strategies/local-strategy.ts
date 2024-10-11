import passport from "passport";
import { Strategy } from "passport-local";
import { db } from "../../database";
import { users } from "../../database/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";
import { BadRequestException } from "../error-handling/http.exceptions";

passport.use(
	new Strategy(
		{ usernameField: "email", passReqToCallback: true, session: false },
		async (_req, email, password, done) => {
			try {
				// check email and throw error if not found
				const user = await db.query.users.findFirst({
					where: eq(users.email, email),
				});
				if (!user)
					throw new BadRequestException("Invalid email or password");

				// check password against hashed password in database
				const isPasswordValid = await bcrypt.compare(
					password,
					user.passwordHash
				);
				if (!isPasswordValid)
					throw new BadRequestException("Invalid email or password");

				console.log("Successfully logged in with local strategy");
				// Else, user is valid
				done(null, user);
			} catch (error) {
				console.log("Caught an error");
				done(error, false);
			}
		}
	)
);
