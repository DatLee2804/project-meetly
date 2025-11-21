import { PrismaClient } from '@prisma/client';

// Giữ nguyên cú pháp import của bạn
import userData from './seedData/user.json' with { type: 'json' };
import teamData from './seedData/team.json' with { type: 'json' };
import projectData from './seedData/project.json' with { type: 'json' };
import taskStatusData from './seedData/taskStatus.json' with { type: 'json' };
import taskPriorityData from './seedData/taskPriority.json' with { type: 'json' };
import taskData from './seedData/task.json' with { type: 'json' };
import teamMemberData from './seedData/teamMember.json' with { type: 'json' };
import taskAssignmentData from './seedData/taskAssignment.json' with { type: 'json' };
import commentData from './seedData/comment.json' with { type: 'json' };
import meetingData from './seedData/meeting.json' with { type: 'json' };
import meetingParticipantData from './seedData/meetingParticipant.json' with { type: 'json' };
import meetingNoteData from './seedData/meetingNote.json' with { type: 'json' };
import meetingSummaryData from './seedData/meetingSummary.json' with { type: 'json' };
// Nếu bạn có file và model tương ứng, hãy bỏ comment:
// import attachmentData from './seedData/attachment.json' with { type: 'json' };
// import projectTeamData from './seedData/projectTeam.json' with { type: 'json' };


const prisma = new PrismaClient();

async function main() {
    console.log('Bắt đầu Seed Database...');
    
    // ======================================================================
    // 0. CLEANUP (Đây là bước cần thiết nhưng không reset sequence)
    // ======================================================================
    console.log('--- Bắt đầu dọn dẹp dữ liệu cũ (Xóa dữ liệu) ---');
    
    // Xóa các bảng phụ thuộc
    await prisma.taskAssignment.deleteMany(); 
    await prisma.meetingSummary.deleteMany(); 
    await prisma.meetingNote.deleteMany();     
    await prisma.meetingParticipant.deleteMany(); 
    await prisma.teamMember.deleteMany();       
    await prisma.comment.deleteMany();
    // await prisma.attachment.deleteMany(); 
    // await prisma.projectTeam.deleteMany(); 

    // Xóa các bảng cốt lõi
    await prisma.task.deleteMany();             
    await prisma.meeting.deleteMany();          

    await prisma.user.deleteMany();             
    await prisma.project.deleteMany();          
    await prisma.team.deleteMany();             

    // Xóa các bảng tham chiếu
    await prisma.taskStatus.deleteMany();       
    await prisma.taskPriority.deleteMany();     

    console.log('--- Dọn dẹp dữ liệu hoàn tất ---');
    // ... Phần còn lại của script seed
    
    // ----------------------------------------------------------------------
    // 1. REFERENCE TABLES (TaskStatus, TaskPriority)
    // ----------------------------------------------------------------------
    // TaskStatus (Trạng thái Nhiệm vụ)
    const seededStatuses = await prisma.taskStatus.createMany({
        data: taskStatusData.map(status => ({
            id: status.id,
            name: status.name,
            orderIndex: status.orderIndex,
            description: status.description,
        })),
        skipDuplicates: true,
    });
    console.log(`Đã seed ${seededStatuses.count} trạng thái nhiệm vụ (TaskStatus).`);
    
    const statusMap = new Map<string, number>();
    taskStatusData.forEach(s => statusMap.set(s.name, s.id));

    // TaskPriority (Độ ưu tiên Nhiệm vụ)
    const seededPriorities = await prisma.taskPriority.createMany({
        data: taskPriorityData.map(priority => ({
            id: priority.id,
            name: priority.name,
            colorCode: priority.colorCode,
            description: priority.description,
        })),
        skipDuplicates: true,
    });
    console.log(`Đã seed ${seededPriorities.count} độ ưu tiên nhiệm vụ (TaskPriority).`);
    
    const priorityMap = new Map<string, number>();
    taskPriorityData.forEach(p => priorityMap.set(p.name, p.id));


    // ----------------------------------------------------------------------
    // 2. CORE ENTITIES (User, Team, Project)
    // ----------------------------------------------------------------------

    // User (Người dùng)
    const seededUsers = await prisma.user.createMany({
        data: userData.map(user => ({
            cognitoId: user.cognitoId,
            username: user.username,
            profilePictureUrl: user.profilePictureUrl,
            teamId: user.teamId, 
        })),
        skipDuplicates: true,
    });
    console.log(`Đã seed ${seededUsers.count} người dùng (User).`);

    // Team (Đội nhóm)
    const seededTeams = await prisma.team.createMany({
        data: teamData.map(team => ({
            teamName: team.teamName,
            productOwnerUserId: team.productOwnerUserId,
            projectManagerUserId: team.projectManagerUserId,
        })),
        skipDuplicates: true,
    });
    console.log(`Đã seed ${seededTeams.count} đội nhóm (Team).`);
    
    // Project (Dự án)
    const seededProjects = await prisma.project.createMany({
        data: projectData.map(project => ({
            id: project.id,
            name: project.name,
            description: project.description,
            startDate: new Date(project.startDate),
            endDate: new Date(project.endDate),
        })),
        skipDuplicates: true,
    });
    console.log(`Đã seed ${seededProjects.count} dự án (Project).`);


    // ----------------------------------------------------------------------
    // 3. DEPENDENT ENTITIES (Task, Meeting)
    // ----------------------------------------------------------------------
    
    // Task (Nhiệm vụ)
    const seededTasks = await prisma.task.createMany({
        data: taskData.map(task => ({
            id: task.id,
            title: task.title,
            description: task.description,
            status: task.status,
            priority: task.priority,
            statusId: statusMap.get(task.status) || null,
            priorityId: priorityMap.get(task.priority) || null,
            tags: task.tags,
            startDate: new Date(task.startDate),
            dueDate: new Date(task.dueDate),
            //points: task.points, 
            projectId: task.projectId,
            authorUserId: task.authorUserId,
            assignedUserId: task.assignedUserId,
        })),
        skipDuplicates: true,
    });
    console.log(`Đã seed ${seededTasks.count} nhiệm vụ (Task).`);

    // Meeting (Cuộc họp)
    const seededMeetings = await prisma.meeting.createMany({
        data: meetingData.map(meeting => ({
            id: meeting.id,
            title: meeting.title,
            description: meeting.description,
            meetingURL: meeting.meetingURL,
            recordingURL: meeting.recordingURL,
            startTime: new Date(meeting.startTime),
            endTime: new Date(meeting.endTime),
            // Khóa ngoại gây lỗi P2003
            teamId: meeting['teamId FK'], 
            projectId: meeting['projectId FK'],
            createById: meeting['createById FK'],
        })),
        skipDuplicates: true,
    });
    console.log(`Đã seed ${seededMeetings.count} cuộc họp (Meeting).`);


    // ----------------------------------------------------------------------
    // 4. JOIN TABLES & FINAL DEPENDENCIES
    // ----------------------------------------------------------------------

    // TeamMember (Thành viên đội nhóm N-N)
    const seededTeamMembers = await prisma.teamMember.createMany({
        data: teamMemberData.map(member => ({
            teamId: member['teamId FK'],
            userId: member['userId FK'],
            role: member.role,
        })),
        skipDuplicates: true,
    });
    console.log(`Đã seed ${seededTeamMembers.count} thành viên đội nhóm (TeamMember).`);

    // TaskAssignment (Phân công Nhiệm vụ N-N)
    const seededAssignments = await prisma.taskAssignment.createMany({
        data: taskAssignmentData.map(assignment => ({
            userId: assignment.userId,
            taskId: assignment.taskId,
        })),
        skipDuplicates: true,
    });
    console.log(`Đã seed ${seededAssignments.count} phân công nhiệm vụ (TaskAssignment).`);

    // Comment (Bình luận)
    const seededComments = await prisma.comment.createMany({
        data: commentData.map(comment => ({
            text: comment.text,
            taskId: comment.taskId,
            userId: comment.userId,
        })),
        skipDuplicates: true,
    });
    console.log(`Đã seed ${seededComments.count} bình luận (Comment).`);
    
    // MeetingParticipant (Người tham gia Cuộc họp N-N)
    const seededParticipants = await prisma.meetingParticipant.createMany({
        data: meetingParticipantData.map(participant => ({
            meetingId: participant['meetingId FK'],
            userId: participant['userId FK'],
            rsvpStatus: participant.rsvpStatus,
        })),
        skipDuplicates: true,
    });
    console.log(`Đã seed ${seededParticipants.count} người tham gia cuộc họp (MeetingParticipant).`);

    // MeetingNote (Ghi chú Cuộc họp)
    const seededNotes = await prisma.meetingNote.createMany({
        data: meetingNoteData.map(note => ({
            content: note.content,
            createAt: new Date(note.createAt),
            meetingId: note['meetingId FK'],
            authorId: note['authorId FK'],
        })),
        skipDuplicates: true,
    });
    console.log(`Đã seed ${seededNotes.count} ghi chú cuộc họp (MeetingNote).`);

    // MeetingSummary (Tóm tắt Cuộc họp)
    const seededSummaries = await prisma.meetingSummary.createMany({
        data: meetingSummaryData.map(summary => ({
            content: summary.content,
            aiModel: summary.aiModel,
            createAt: new Date(summary.createAt),
            meetingId: summary['meetingId FK'],
            createById: summary['createById FK'],
        })),
        skipDuplicates: true,
    });
    console.log(`Đã seed ${seededSummaries.count} tóm tắt cuộc họp (MeetingSummary).`);

    console.log('Seed Database HOÀN THÀNH. ✅');
}

main()
    .catch((e) => {
        console.error('Lỗi khi seed database:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
    