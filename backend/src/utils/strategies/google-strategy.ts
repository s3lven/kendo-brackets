import passport from "passport";
import { Profile, Strategy, VerifyCallback } from "passport-google-oauth20";
import { db } from "../../database";
import { Request } from "express";
import { eq } from "drizzle-orm";
import { users } from "../../database/schema";

passport.use(
	new Strategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
			callbackURL: '/api/v1/google/callback',
			passReqToCallback: true,
		},
		async (req: Request, accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) => {
			console.log(profile)
            done(null, profile)

			try {
				const user = await db.query.users.findFirst({
					where: eq(users.email, profile.emails![0].value)
				})	

				if (!user) {
					// Create a new user
				} else {
					// Login the user
					
				}



			} catch (error) {
				done(error, false)
			}
            
            // Try to find the user
            // await db.query.users.
			// If they don't exist, create a new user record and associate it with Google
            // Else, get the user record associated with it and log the use rin
		}
	)
);
