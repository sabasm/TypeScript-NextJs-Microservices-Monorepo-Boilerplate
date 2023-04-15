import config from "../config";
import { FormatFn } from "morgan";
import { Request, Response } from "express";
import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  // defaultMeta: { service: "auth-service" },
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

if (config.nodeEnv !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

const customFormat: FormatFn<Request, Response> = (req, res) => {
  const message = `logger called`;
  return message;
};

//export default logger and also export customFormat
export { logger, customFormat };
