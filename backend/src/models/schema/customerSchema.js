import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  firstname: String,
  lastname: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: {
    countryCode: String,
    number: String,
  },
  address: { street: String, zipcode: String, city: String },
  timeCreated: { type: Date, default: Date.now },
});

const Customer = mongoose.model("Customer", CustomerSchema);

export default Customer;
