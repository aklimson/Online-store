import controller from "../controllers/productController.js";
import express from "express";

const router = express.Router();

router.get("/products", (req, res, next) => {
  controller.getAllProducts(req, res, next);
});

router.get("/products/categories", (req, res, next) => {
  controller.getProductsByCategory(req, res, next);
});

router.get("/products/search", (req, res, next) => {
  controller.searchProducts(req, res, next);
});

export default router;
