import { eq } from "drizzle-orm";
import dbConn from "../db-conn";
import { students } from "../schema";

export async function findOneStudent(studentId: number) {
    return await
        // dbConn.select().from(students).where(eq(students.id, studentId)).limit(1)
        // where: (students, { eq }) => eq(students.id, studentId),
        dbConn.query.students.findFirst({
            where: eq(students.id, studentId)

        });
}

export async function findAllStudents() {
    return await dbConn.query.students.findMany();
}

export async function findStudentsWithGrades() {
    return await dbConn.query.students.findMany(
        {
            with: {
                grades: {
                    with: {
                        subject: true
                    }
                }
            }
        }
    );
}