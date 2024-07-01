import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
class MongooseConnect {
  async dataBaseConnect() {
    mongoose.connect(
      `mongodb+srv://admin:admin123@inventory.49jqyd0.mongodb.net/?retryWrites=true&w=majority&appName=Inventory`
    );
    return mongoose.connection;
  }
}

export default MongooseConnect;
