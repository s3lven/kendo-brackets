import { Request } from "express"

export interface AuthRequest extends Request {
    user?: {
        userId: number
        email: string
    }
}

export interface RegisterRequestBody {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    dojo: string;
  }