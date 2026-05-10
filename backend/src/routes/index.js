import express from "express";
import productRoute from "./productRoute.js";

export const router = express.Router();

router.use("/api", productRoute);
