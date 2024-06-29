import express, { NextFunction, Request, Response } from "express";
import { routerAuth } from "./main/auth/routers";
import { errorHandler } from "./middleware/errorHandler";

const app = express();
require("dotenv").config();
app.use(express.json());
const port = process.env.PORT || 8080;
const root_path = process.env.ROOT_PATH || "/api/v1";

// router
app.use(`${root_path}/auth`, routerAuth);

// middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is running port ${port}`);
});
