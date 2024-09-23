import { Router } from "express";
import * as Mutators from '../features/auth/mutators'

const router = Router();

// /api/v1/register
router.get("/register", Mutators.register);

// /api/v1/login
router.get("/login", Mutators.login)

// /api/v1/logout
router.post("/logout", Mutators.logout)

// /api/v1/refresh-token
router.post('/refresh-token', Mutators.refreshToken);


export default router;
