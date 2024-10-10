import { Request, Response } from "express";

export const verifyAuth = (req: Request, res: Response) => {
	res.status(200).json({ message: "You are still authenticated" });
};
