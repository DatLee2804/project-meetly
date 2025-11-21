import { Router } from "express";
import { getTeams } from "src/controllers/teamController.js";

const router = Router();

router.get("/", getTeams);

export default router;
