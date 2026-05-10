import Product from "./schema/productSchema.js";

class ProductModel {
  async getAllProducts() {
    return await Product.find({});
  }

  async getProductsByCategory(category) {
    return await Product.find({ category });
  }

  async searchProducts(searchStr) {
    return await Product.find({
      $or: [
        { name: { $regex: searchStr, $options: "i" } },
        { model: { $regex: searchStr, $options: "i" } }
      ],
    });
  }
}

export default new ProductModel();
