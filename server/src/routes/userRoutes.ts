import { Router } from "express";
import { getUsers, getUser, postUser } from "src/controllers/userController.js";

//import { getUser, getUsers, postUser } from "../controllers/userController";

const router = Router();

router.get("/", getUsers);
router.post("/", postUser);
router.get("/:cognitoId", getUser);

export default router;

