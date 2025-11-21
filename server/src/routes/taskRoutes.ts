import { Router } from "express";
import { 
    getTask, 
    createTask, 
    updateTaskStatus,
    getUserTasks
} from "../controllers/taskController.js";

const router = Router();
router.get("/", getTask);
router.post("/", createTask);
router.patch("/:taskId/status", updateTaskStatus);
router.get("/user/:userId", getUserTasks);

export default router;
