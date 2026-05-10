import Product from "./schema/productSchema.js";

class ProductModel {
  async getAllProducts() {
    return [{"name": "John"}];
  }

  async getAllPhones() {}

  async getAllLaptops() {}

  async getAllTelevisions() {}

  async getAllAccessories() {}
}

export default new ProductModel();
