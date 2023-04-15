"use strict";
import config from "./config";
import { globalMiddlewares } from "./middlewares";
import { logger } from "./utils/logger";

import express, { Express, Request, Response, NextFunction } from "express";

const app: Express = express();

// Add global middlewares to app
Object.values(globalMiddlewares).forEach((mw) => app.use(mw));

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

// Gracefully SIGINT
process.on("SIGINT", () => {
  logger.info("Shutting down...");
  process.exit(0);
});
