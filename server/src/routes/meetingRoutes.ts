// Các file routes và index.ts không cần sửa lại
// vì không liên quan đến lỗi types này.

import { Router } from "express";
import { getMeetings, createMeeting } from "../controllers/meetingController.js";

const router = Router();

router.get("/", getMeetings); // GET /meetings (có thể kèm ?projectId=X)
router.post("/", createMeeting); // POST /meetings

export default router;