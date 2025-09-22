import { Router } from "express";
import { get_health } from "../controllers/health_controller.js";

const router = Router();

router.get("/", get_health);

export default router;
