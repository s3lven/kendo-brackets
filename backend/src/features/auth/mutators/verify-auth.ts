import { Request, Response } from "express";

export const verifyAuth = (_req: Request, res: Response) => {
	res.status(200).json({ message: "You are still authenticated" });
};
