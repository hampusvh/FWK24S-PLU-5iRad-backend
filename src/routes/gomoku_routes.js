import { Router } from "express";
import { add_token, create_game, add_player, get_tiles, get_game } from "../controllers/gomoku_controller.js";

const router = Router();

router.post("/add_token", add_token);
router.post("/create_game", create_game);
router.post("/add_player", add_player);
router.get("/get_tiles", get_tiles);
router.get("/get_game", get_game);

export default router;