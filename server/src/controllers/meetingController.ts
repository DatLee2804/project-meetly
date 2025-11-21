
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Lấy danh sách cuộc họp, có thể lọc theo projectId qua query param
export const getMeetings = async (
    req: Request, 
    res: Response
): Promise<void> => {
    const { projectId } = req.query;
    try {
        const meetings = await prisma.meeting.findMany({
            where: projectId ? { projectId: Number(projectId) } : {},
            include: {
                // ĐÃ SỬA: Dùng 'creator' thay vì 'host'
                creator: true, 
                project: true,
                // THÊM: Include quan hệ 'team'
                team: true,
                // Có thể thêm: notes, summaries, participants nếu cần hiển thị
                // notes: true,
                // participants: true,
            }
        });
        res.json(meetings);
    } catch (error: any) {
        res.status(500).json({ message: `Error retrieving meetings: ${error.message}` });
    }
};

// Tạo một cuộc họp mới
export const createMeeting = async (
    req: Request, 
    res: Response
): Promise<void> => {
    // ĐÃ SỬA: Dùng 'createById' thay vì 'hostUserId'
    const { title, description, startTime, endTime, projectId, teamId, createById, meetingURL, recordingURL } = req.body;
    
    try {
        const newMeeting = await prisma.meeting.create({
            data: {
                title,
                description,
                meetingURL,      // Thêm các trường mới
                recordingURL,    // Thêm các trường mới
                startTime,
                endTime,
                projectId: Number(projectId),
                teamId: Number(teamId),
                createById: Number(createById), // ĐÃ SỬA: Dùng createById
            }
        });
        res.status(201).json(newMeeting);
    } catch (error: any) {
        res.status(500).json({ message: `Error creating meeting: ${error.message}` });
    }
};