import express from "express";
import ProductController from "../controllers/productController.js";

const routes = express.Router();
routes.get("/products", ProductController.listProduct);
routes.post("/products", ProductController.addProducts);
export default routes;
