import { Router } from "express";
import { add_token } from "../controllers/gomoku_controller.js";

const router = Router();

router.post("/add_token", add_token);

export default router;
