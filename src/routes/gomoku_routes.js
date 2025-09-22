import { Router } from "express";
import { add_token, create_game } from "../controllers/gomoku_controller.js";

const router = Router();

router.post("/add_token", add_token);
router.post("/create_game", create_game);

export default router;
