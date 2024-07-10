import express from "express";
import { routerAuth } from "../main/auth/routers";

const router = express.Router();

// router
router.use(`/auth`, routerAuth);

export default router;