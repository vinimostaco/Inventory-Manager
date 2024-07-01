import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function dataBaseConnect() {
  mongoose.connect(
    `mongodb+srv://admin:admin123@inventory.49jqyd0.mongodb.net/?retryWrites=true&w=majority&appName=Inventory`
  );
  return mongoose.connection;
}

export default dataBaseConnect;
// mongodb+srv://admin:<password>@inventory.49jqyd0.mongodb.net/?retryWrites=true&w=majority&appName=Inventory
