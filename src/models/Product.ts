import mongoose, { Document, Schema, Model } from "mongoose";
import IProduct from "interfaces/Product.js";

interface IProductDocument extends IProduct, Document {}

const productScheema: Schema<IProductDocument> = new Schema({
  name: { type: String },
  description: String,
  category: { type: String },
  price: { type: String },
  quantityInStock: { type: Number },
  supplier: { type: String },
  entryDate: { type: String },
  expirationDate: { type: String },
});

const Product: Model<IProductDocument> = mongoose.model<IProductDocument>(
  "Product",
  productScheema
);

export { Product, productScheema };
