import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

interface Config {
  nodeEnv: string;
  port: number;
  dbHost: string;
  dbPort: number;
  dbName: string;
  dbUsername: string;
  dbPassword: string;
  dataStoreHost: string;
  dataStorePort: number;
  dataStorePassword: string;
}

const config: Config = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: parseInt(process.env.PORT || "4444", 10),
  dbHost: process.env.DB_HOST || "localhost",
  dbPort: parseInt(process.env.DB_PORT || "27017", 10),
  dbName: process.env.DB_NAME || "myapp",
  dbUsername: process.env.DB_USERNAME || "",
  dbPassword: process.env.DB_PASSWORD || "",
  dataStoreHost: process.env.DATA_STORE_HOST || "127.0.0.1",
  dataStorePort: parseInt(process.env.DATA_STORE_PORT || "6379", 10),
  dataStorePassword: process.env.DATA_STORE_PASSWORD || "secret",
};

export default config;
