import express from "express";
import productRoute from "./productRoute.js";
import authRoute from "./authRoute.js";

export const router = express.Router();

router.use("/api", productRoute);
router.use("/api/auth", authRoute);
