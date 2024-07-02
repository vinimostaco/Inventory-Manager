import mongoose, { Document, Schema, Model } from "mongoose";
import ISale from "../interfaces/Sale.js";

interface ISaleDocument extends ISale, Document {}

const sailSchema: Schema<ISaleDocument> = new Schema({
  saleId: { type: Schema.ObjectId },
  totalPrice: { type: Number },
  buyer: { type: String },
  saleDate: { type: String },
});

const Sale: Model<ISaleDocument> = mongoose.model<ISaleDocument>(
  "Sale",
  sailSchema
);

export { Sale, sailSchema };
