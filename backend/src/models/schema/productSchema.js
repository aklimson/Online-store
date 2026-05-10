import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  model: { type: String, required: true },
  category: { type: String, required: true, enum: ["Phone", "Laptop", "Television", "Accesories"]},
  description: { type: String, required: true },
  specifications: {
    ram: { type: String, required: true },
    ssd: { type: String, required: true },
  },
  price: { type: Number, required: true, min: 0 },
  quantity: { type: Number, required: true, min: 0 },
  timeCreated: { type: Date, default: Date.now },
});


const Product = mongoose.model("Product", ProductSchema);

export default Product;
