import {registerCustomer,loginCustomer} from "../controllers/authController.js"
import express from "express";

const router = express.Router();

router.post("/register",registerCustomer);

router.post("/login",loginCustomer)

export default router;