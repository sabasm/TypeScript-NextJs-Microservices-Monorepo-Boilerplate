import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import compression from "compression";
import { customFormat } from "../utils/logger";

// Define middleware
const globalMiddlewares = {
  cors: cors(),
  helmet: helmet(),
  compression: compression(),
  jsonParser: bodyParser.json(),
  urlencodedParser: bodyParser.urlencoded({ extended: true }),
  routeLogger: morgan(customFormat),
};

export { globalMiddlewares };
