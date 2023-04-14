"use strict";
import config from "./config";
import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan, { FormatFn } from "morgan";
import bodyParser from "body-parser";
import compression from "compression";
import logger from "./utils/logger";

const customFormat: FormatFn<Request, Response> = (req, res) => {
  const message = `${req.method} ${req.url} ${
    res.statusCode
  } ${new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })}`;
  logger.info(message);
  return message;
};

const app: Express = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan(customFormat));

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Auth Service!");
});

// Error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error("Something went wrong!");
  logger.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start server
app.listen(config.port, () => {
  logger.info(`Server is listening to your requests...`);
});
