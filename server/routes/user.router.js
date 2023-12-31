import { Router } from "express";
import { forgotPassword, resetPassword } from "../controllers/user.js";

const router = Router();

router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;
