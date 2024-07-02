import dotenv from "dotenv";

dotenv.config();

interface Config {
  port: number;
  db: {
    user: string;
    pass: string;
  };
}

const config: Config = {
  port: Number(process.env.PORT) || 3001,
  db: {
    user: process.env.DB_USER || "username",
    pass: process.env.DB_PASS || "password",
  },
};

export default config;
