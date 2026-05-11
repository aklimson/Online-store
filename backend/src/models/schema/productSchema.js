import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  model: { type: String, required: true },
  category: { type: String, required: true, enum: ["Phone", "Laptop", "Television", "Accessories"]},
  description: { type: String, required: true },
  specifications: {
    type: Map,
    of: String,
  },
  image: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  quantity: { type: Number, required: true, min: 0 },
  timeCreated: { type: Date, default: Date.now },
});


const Product = mongoose.model("Product", ProductSchema);

export default Product;
