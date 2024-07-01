import { Request, Response } from "express";
import { Product } from "../models/Product.js";

class ProductController {
  static async listProduct(req: Request, res: Response): Promise<void> {
    try {
      const listProducts = await Product.find({});
      res.status(200).json({ listProducts });
    } catch (err) {
      console.error("Error trying to list Product: ", err);
    }
  }
  static async addProducts(req: Request, res: Response): Promise<void> {
    try {
      const newProduct = await Product.create(req.body);
      res
        .status(200)
        .json({ message: "Product added succefully", Product: newProduct });
    } catch (err) {
      console.error("Error trying to add Product: ", err);
    }
  }
}

export default ProductController;
