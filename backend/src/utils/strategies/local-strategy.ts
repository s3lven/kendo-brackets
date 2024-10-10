import passport from "passport";
import { Strategy } from "passport-local";
import { db } from "../../database";
import { users } from "../../database/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";

passport.use(
	new Strategy({usernameField: "email", passReqToCallback: true, session: false}, async (req, email, password, done) => {
		try {
			// check email and throw error if not found
			const user = await db.query.users.findFirst({
				where: eq(users.email, email),
			});
			if (!user) throw new Error("Invalid credentials");

			// check password against hashed password in database
			const isPasswordValid = await bcrypt.compare(
				password,
				user.passwordHash
			);
			if (!isPasswordValid) throw new Error("Invalid credentials");

            console.log("Successfully logged in with local strategy")
			// Else, user is valid
			done(null, user);
		} catch (error) {
			done(error, false);
		}
	})
);
