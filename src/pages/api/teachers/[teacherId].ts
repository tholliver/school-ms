import type { NextApiRequest, NextApiResponse } from "next";
import { findOneTeacher } from "../db/repository/teachers";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { teacherId } = req.query;
        const teacherFound = await findOneTeacher(Number(teacherId))

        res.status(200).send(teacherFound)
    } catch (err) {
        res.status(500).send({ error: 'failed to fetch data' + err })
    }

}