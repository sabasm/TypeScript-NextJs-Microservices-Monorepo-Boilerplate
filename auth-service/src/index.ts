import express from "express";
import { sayHello } from "./controller";

const app = express();
const port = 4440;

app.use(express.json());

app.get("/users", sayHello);

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
