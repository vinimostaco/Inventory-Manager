import express from "express";
import ProductController from "../controllers/productController.js";

const routes = express.Router();
routes.get("/products", ProductController.listProducts);
routes.get("/products/:id", ProductController.listProduct);
routes.post("/products", ProductController.addProducts);
routes.put("/products/:id", ProductController.updateProduct);
routes.delete("/products/:id", ProductController.deleteProduct);
export default routes;
