import express from "express";
import productRoute from "./productRoute.js";
import authRoute from "./authRoute.js"
import { authMiddleware } from '../middleware/authMiddleware.js';
import { adminMiddleware } from "../middleware/adminMiddleware.js";

export const router = express.Router();

router.use("/api", productRoute);
router.use("/api,",)
