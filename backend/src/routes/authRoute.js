import Auth from "../controllers/authController.js"
import express from "express";

const router = express.Router();

router.post("/register",Auth.registerUser);

router.post("/login",Auth.loginUser)

export default router;