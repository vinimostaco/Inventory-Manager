import { Document } from "mongoose";

interface IProduct extends Document {
  name: { type: String; required: true };
  description: string;
  category: { type: String; required: true };
  price: { type: String; required: true };
  quantityInStock: { type: Number; required: true };
  supplier: { type: String; required: true };
  entryDate: { type: Date; required: true };
  expirationDate: { type: Date; required: true };
}

export default IProduct;
