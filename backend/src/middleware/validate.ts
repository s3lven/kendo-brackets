import { Request, Response, NextFunction } from "express";
import { ValidationChain } from "express-validator/lib/chain/validation-chain";
import { body } from "express-validator/lib/middlewares/validation-chain-builders";
import { validationResult } from "express-validator/lib/validation-result";

// Middleware for login validation
export const loginValidation = [
	// Email validation and sanitization
	body("email")
		.isEmail()
		.withMessage("Please provide a valid email address")
		.normalizeEmail(), // Sanitize email

	// Password validation
	body("password").notEmpty().withMessage("Password is required"),
];

export const registerValidation: ValidationChain[] = [
	// Validate and sanitize email
	body("email")
		.isEmail()
		.withMessage("Please provide a valid email address")
		.normalizeEmail(),

	// Validate password
	body("password")
		.isLength({ min: 8 })
		.withMessage("Password must be at least 8 characters long"),

	// Validate and sanitize first name
	body("firstName")
		.trim()
		.escape()
		.isLength({ min: 2, max: 50 })
		.withMessage("First name must be between 2 and 50 characters")
		.isAlpha()
		.withMessage("First name must contain only letters"),

	// Validate and sanitize last name
	body("lastName")
		.trim()
		.escape()
		.isLength({ min: 2, max: 50 })
		.withMessage("Last name must be between 2 and 50 characters")
		.isAlpha()
		.withMessage("Last name must contain only letters"),

	// Validate and santize dojo
	body("dojo")
		.trim()
		.escape()
		.isLength({ min: 2, max: 100 })
		.withMessage("Dojo name must be between 2 and 100 characters"),
];

export const handleValidationErrors = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		// Format the errors for a more user-friendly response
		const formattedErrors = errors.array().map((err: { msg: any }) => ({
			message: err.msg,
		}));
		return res
			.status(400)
			.json({ success: false, errors: formattedErrors });
	}
	next();
};
