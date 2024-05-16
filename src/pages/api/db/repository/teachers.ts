import { eq } from "drizzle-orm";
import dbConn from "../db-conn";
import { classrooms, classroomsToStudents, students, subjects, teachers } from "../schema";

export async function findOneTeacher(teacherId: number) {
    return await
        dbConn.query.teachers.findFirst({
            where: eq(teachers.id, teacherId)
        });
}

export async function findOneTeacherWithSubjects(teacherId: number) {
    return await
        // dbConn.select().from(teachers).leftJoin(subjects, eq(teachers.id, subjects.teacher_id))
        //     .rightJoin(classrooms, eq(subjects.classroom_id, classrooms.id))
        //     .leftJoin(classroomsToStudents, eq(classrooms.id, classroomsToStudents.classroom_id))
        //     .leftJoin(students, eq(students.id, classroomsToStudents.student_id)).where(eq(teachers.id, teacherId))
        dbConn.query.teachers.findFirst({
            columns: {
                password: false
            },
            where: eq(teachers.id, teacherId),
            with: {
                subjects: {
                    with: {
                        classroom: true
                    }
                }
            }
        });

    // {
    //     with: {
    //         classroomsToStudents: {
    //             with: {
    //                 classroomstudents: true
    //             }
    //         }
    //     }
    // }
}

export async function findAllTeachers() {
    return await dbConn.query.teachers.findMany();
}