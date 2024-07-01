import express from "express";
import MongooseConnect from "./config/dataBaseConnect.js";
import routes from "./routes/index.js";

const mongooseConnect = new MongooseConnect();
const connect = await mongooseConnect.dataBaseConnect();
const app = express();

connect.on("error", (err) => {
  console.error("Error on connect database: ", err);
});

connect.once("open", () => {
  console.log("connected to database");
});

routes(app);
export default app;
