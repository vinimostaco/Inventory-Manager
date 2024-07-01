import express from "express";
import dataBaseConnect from "./config/dataBaseConnect.js";
import routes from "./routes/index.js";
const connect = await dataBaseConnect();
const app = express();

connect.on("error", (err) => {
  console.error("Error on connect database: ", err);
});

connect.once("open", () => {
  console.log("connected to database");
});

routes(app);
export default app;
