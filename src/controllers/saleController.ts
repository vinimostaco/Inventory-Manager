import { Request, Response } from "express";
import { Sale } from "../models/SaleModel.js";

class SaleController {
  static async listSales(req: Request, res: Response): Promise<void> {
    try {
      const sail = await Sale.find();
      res.status(200).json(sail);
    } catch (err) {
      console.error("Erro trying to get Sail: ", err);
    }
  }
  static async getSale(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const sail = await Sale.findById(id);
      res.status(200).json(sail);
    } catch (err) {
      console.error(err);
    }
  }
  static async addSale(req: Request, res: Response): Promise<void> {
    try {
      const newSale = await Sale.create(req.body);
      res.status(201).json({
        message: "Sail created successfully",
        newSale: newSale,
      });
    } catch (err) {
      console.error("Error trying to add Sale: ", err);
    }
  }
  static async updateSale(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const sale = await Sale.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Sale updated succefully", sale: sale });
    } catch (err) {
      console.error("Error trying to update the Sale: ", err);
    }
  }
  static async deleteSale(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await Sale.findByIdAndDelete(id);
      res.status(200).json({ message: "Sale deleted successfully" });
    } catch (err) {
      console.error("Error trying to delete the Sale: ", err);
    }
  }
}

export default SaleController;
