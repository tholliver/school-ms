import { Student, Teacher } from "@/types";
import { fetcher, objFetcher } from "../utils";

export async function fetchTeacherDash(teacherId: number) {
    return objFetcher<Teacher>(`/api/teachers/${teacherId}/info`)
}

export async function fetchTeachers(pagination: number) {
    return fetcher<Teacher>('/api/teachers/all')
}