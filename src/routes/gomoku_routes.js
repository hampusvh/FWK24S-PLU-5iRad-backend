import { Router } from "express";
import { addToken, createGame, addPlayer, getTiles, getGame } from "../controllers/gomoku_controller.js";

const router = Router();

router.post("/add-token", addToken);
router.post("/create-game", createGame);
router.post("/add-player", addPlayer);
router.get("/get-tiles", getTiles);
router.get("/get-game", getGame);

export default router;