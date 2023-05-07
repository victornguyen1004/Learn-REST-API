import mongoose, { Schema, ObjectId } from "mongoose";

const Product = mongoose.model(
  "Product",
  new Schema(
    {
      id: { type: ObjectId },
      name: {
        type: String,
        required: true,
      },
      price: { type: String },
      rating: { type: String },
      category: { type: String },
      description: { type: String },
      imgUrl: { type: String },
    },
    {
      autoCreate: false,
      autoIndex: true,
    }
  )
);

export default Product;
