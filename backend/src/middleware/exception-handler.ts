import { NextFunction, Request, Response } from "express";
import { IHTTPError } from "../types/error_t";

export const errorHandler = (
	error: IHTTPError,
	_req: Request,
	res: Response,
	_next: NextFunction
) => {
	const statusCode = error.statusCode || 500;
	const message = error.message || "Something went wrong!";
	return res.status(statusCode).send({ statusCode, message });
};
