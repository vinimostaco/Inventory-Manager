import { Request, Response } from "express";
import { Product } from "../models/Product.js";

class ProductController {
  static async listProducts(req: Request, res: Response): Promise<void> {
    try {
      const listProducts = await Product.find({});
      res.status(200).json({ listProducts });
    } catch (err) {
      console.error("Error trying to list Product: ", err);
    }
  }
  static async listProduct(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);
      res.status(200).json({ product });
    } catch (err) {
      console.error("Error trying to list Product: ", err);
    }
  }
  static async addProducts(req: Request, res: Response): Promise<void> {
    try {
      const newProduct = await Product.create(req.body);
      res
        .status(200)
        .json({ message: "Product added succefully", product: newProduct });
    } catch (err) {
      console.error("Error trying to add Product: ", err);
    }
  }
  static async updateProduct(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json({ message: "updated product", product: product });
    } catch (err) {
      console.error("Error trying to update product: ", err);
    }
  }
  static async deleteProduct(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndDelete(id);
      res.status(200).json({ message: "Deleted Product" });
    } catch (err) {
      console.error("Error trying to delete Product: ", err);
    }
  }
}

export default ProductController;
