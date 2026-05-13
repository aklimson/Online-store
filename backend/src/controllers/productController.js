import model from "../models/productModel.js";

class ProductController {
  async getAllProducts(req, res, next) {
    try {
      const result = await model.getAllProducts();
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async getProductsByCategory(req, res, next) {
    try {
      const { category } = req.body;
      const result = await model.getProductsByCategory(category);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async searchProducts(req, res, next) {
    try {
      const search = req.query.searchString;
      const result = await model.searchProducts(search);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async getProductById(req, res, next) {
    try {
      const { id } = req.params;

      const result = await model.getProductById(id);

      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default new ProductController();
