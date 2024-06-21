const express = require("express");
const routerAuth = require("./src/routes/auth");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 8080;

app.use("/auth", routerAuth);
app.listen(port, () => {
  console.log(`server is running port port ${port}`);
});
