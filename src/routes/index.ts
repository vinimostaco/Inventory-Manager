import express, { Application, Request, Response } from "express";
import products from "./productRoutes.js";

const routes = (app: Application): void => {
  app.get("/", (req: Request, res: Response) =>
    res.status(200).json({ message: "Welcome to the Invetory Manager! :P" })
  );

  app.use(express.json(), products);
};

export default routes;
