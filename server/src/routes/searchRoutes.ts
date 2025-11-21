import { Router } from "express";
import { search } from "src/controllers/searchController.js";

const router = Router();

router.get("/", search);

export default router;
