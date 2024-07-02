import SaleController from "../controllers/saleController.js";
import express from "express";

const routes = express.Router();

routes.get("/sales", SaleController.listSales);
routes.get("sales/:id", SaleController.getSale);
routes.post("/sales", SaleController.addSale);
routes.put("/sales/:id", SaleController.updateSale);
routes.delete("/sales/:id", SaleController.deleteSale);
export default routes;
