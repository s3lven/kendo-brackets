import { Router } from "express";
import * as Queries from '../features/users/queries'
import { authenticateToken } from "../middleware/authenticateTokens";

const router = Router();

// /api/v1/users
router.get("/", authenticateToken, Queries.getUsers);

// /api/v1/users/id
router.get("/:id", authenticateToken, Queries.getUserById)

export default router;
