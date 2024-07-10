import 'dotenv/config';
import initializeServer from "./initializeServer";

const port = process.env.PORT || 8080;
console.log("🚀 ~ port:", port)

const app = initializeServer()

app.listen(port, () => {
  console.log(`server is running port ${port}`);
});
