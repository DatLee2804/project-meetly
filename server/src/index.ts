// D:\Meetly\server\src\index.ts
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser"; // KHÔNG CẦN * as
import cors from "cors";             // KHÔNG CẦN * as
import morgan from "morgan";           // KHÔNG CẦN * as
import helmet from "helmet";           // KHÔNG CẦN * as
import { PrismaClient } from "@prisma/client";
import projectRoutes from "./routes/projectRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import searchRoutes from "./routes/searchRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import teamRoutes from "./routes/teamRoutes.js";
import meetingRoutes from "./routes/meetingRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet()); // KHÔNG CẦN .default()
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cors()); // KHÔNG CẦN .default()
app.use(morgan("common")); // KHÔNG CẦN .default()
app.use(bodyParser.json()); // KHÔNG CẦN .default
app.use(bodyParser.urlencoded({ extended: false }));

/*ROUTES*/
app.get("/", (req, res) => {
    res.send("This is home route");
});
app.use("/projects", projectRoutes); // SỬ DỤNG .default
app.use("/tasks", taskRoutes); // SỬ DỤNG .default
app.use("/search",searchRoutes);
app.use("/users", userRoutes);
app.use("/teams", teamRoutes);
app.use("/meetings", meetingRoutes); // Sử dụng route mới


/*SERVER*/
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on part http://localhost:${PORT}`);
});