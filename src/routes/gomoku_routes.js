import { Router } from "express";
import { add_token, create_game, add_player, get_tiles, get_game } from "../controllers/gomoku_controller.js";

const router = Router();

router.post("/add-token", add_token);
router.post("/create-game", create_game);
router.post("/add-player", add_player);
router.get("/get-tiles", get_tiles);
router.get("/get-game", get_game);

export default router;