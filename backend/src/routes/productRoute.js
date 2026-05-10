import controller from "../controllers/productController.js";
import express from "express"

const router = express.Router()

router.get('/products', (req, res, next)=> {controller.getAllProducts(req, res, next)})

router.get('/products/phones', (req, res, next)=> {controller.getAllPhones(req, res, next)})

router.get('/products/laptops', (req, res, next)=> {controller.getAllLaptops(req, res, next)})

router.get('/products/accessories', (req, res, next)=> {controller.getAllAccessories(req, res, next)})


export default router