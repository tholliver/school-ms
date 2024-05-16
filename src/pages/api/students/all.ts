import type { NextApiRequest, NextApiResponse } from 'next'
import dbConn from '../db/db-conn'
import { findAllStudents } from '../db/repository/students';

export default async function getStudents(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const result = await findAllStudents();
        res.status(200).send(result)
    } catch (err) {
        res.status(500).send({ error: 'failed to fetch data' })
    }
}


