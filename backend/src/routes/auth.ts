import { Router } from "express";
import * as Mutators from '../features/auth/mutators'
import { handleValidationErrors, loginValidation, registerValidation } from "../middleware/validate";

const router = Router();

// /api/v1/register
router.post("/register", registerValidation, handleValidationErrors, Mutators.register);

// /api/v1/login
router.post("/login", loginValidation, handleValidationErrors,  Mutators.login)

// /api/v1/logout
router.get("/logout", Mutators.logout)

// /api/v1/refresh-token
router.get('/refresh-token', Mutators.refreshToken);


export default router;
