import exppress, { Router } from "express";
import { loginUser, resetUserPassword, userForgotPassword, userRegistration, verifyUser } from "../controller/auth.controller.ts";
import { verifyForgotPasswordOtp } from "../utils/auth.helper.ts";

const router: Router = exppress.Router();

router.post("/user-registration", userRegistration);
router.post("/verify-user", verifyUser);
router.post("/login-user", loginUser);
router.post("/forgot-password-user", userForgotPassword);
router.post("/reset-password-user", resetUserPassword);
router.post("/verify-forgot-password-user", verifyForgotPasswordOtp);



export default router;
