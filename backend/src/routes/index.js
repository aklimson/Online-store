import express from "express";
import productRoute from "./productRoute.js";
import auth from "./authRoute.js"


export const router = express.Router();

router.use("/api", productRoute);
router.use("/api",auth)
