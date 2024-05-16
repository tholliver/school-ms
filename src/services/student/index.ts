import { Student, Teacher } from "@/types";
import { fetcher, objFetcher } from "../utils";

export async function fetchStudents(pagination: number) {
    return fetcher<Student>('/api/students/all')
}

