import type { NextApiRequest, NextApiResponse } from "next";
import { findOneStudent } from "../db/repository/students";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { studentId } = req.query;
        const studentFound = await findOneStudent(Number(studentId))

        res.status(200).send(studentFound)
    } catch (err) {
        res.status(500).send({ error: 'failed to fetch data' + err })
    }

}