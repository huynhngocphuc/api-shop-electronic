import express from "express";
import { routerAuth } from "./main/auth/routers";

const app = express();
require("dotenv").config();
app.use(express.json());
const port = process.env.PORT || 8080;
const root_path = process.env.ROOT_PATH || "/api/v1";

app.use(`${root_path}/auth`, routerAuth);
app.listen(port, () => {
  console.log(`server is running port port ${port}`);
});