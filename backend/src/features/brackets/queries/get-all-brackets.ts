import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import { db } from '../../../database';
import { brackets } from '../../../database/schema';


export const getAllBrackets = asyncHandler(async (request: Request, response: Response) => {
    const allBrackets = await db
        .select({id: brackets.id, name: brackets.name, type: brackets.type, status: brackets.status, bracketCode: brackets.bracketCode})
        .from(brackets);
    
    response.status(200).json(allBrackets);
})