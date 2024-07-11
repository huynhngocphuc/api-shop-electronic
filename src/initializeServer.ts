import express from "express";
import { errorHandler } from "./middleware/errorHandler";
import router from "./router";
export default function initializeServer() {
  const app = express();
  const root_path = process.env.ROOT_PATH || "/api/v1";

  app.use(express.json());
  app.use(root_path, router);
  app.use(errorHandler);

  app.use((req, res) => {
    res.status(404).send('SomeThings went wrong');
  });
  return app;
}
