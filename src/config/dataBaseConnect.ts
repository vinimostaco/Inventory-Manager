import config from "../config/environment.js";
import mongoose from "mongoose";

class MongooseConnect {
  async dataBaseConnect() {
    mongoose.connect(
      `mongodb+srv://${config.db.user}:${config.db.pass}@inventory.49jqyd0.mongodb.net/?retryWrites=true&w=majority&appName=Inventory`
    );
    return mongoose.connection;
  }
}

export default MongooseConnect;
