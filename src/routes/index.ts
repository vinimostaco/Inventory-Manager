import express, { Application, Request, Response } from "express";
import products from "./productRoutes.js";
import sales from "./saleRoutes.js";
const routes = (app: Application): void => {
  app.get("/", (req: Request, res: Response) =>
    res.status(200).json({ message: "Welcome to the Invetory Manager! :P" })
  );

  app.use(express.json(), products, sales);
};

export default routes;
