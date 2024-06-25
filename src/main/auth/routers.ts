import express from 'express';
import { User } from "./models";

const routerAuth = express.Router();

routerAuth.post("/register", async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const user = await User.create({
      username,
      password,
      email,
    });
    res.json(user);
  } catch (error) {

    res.status(500).json({ error: "Something went wrong" });
  }
});

routerAuth.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
  } catch (error) {}
});

export { routerAuth };
