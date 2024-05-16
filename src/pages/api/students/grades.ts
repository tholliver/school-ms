import type { NextApiRequest, NextApiResponse } from 'next'
import { findStudentsWithGrades } from '../db/repository/students';

export default async function getStudentsWithGrades(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const result = await findStudentsWithGrades();
        res.status(200).send(result)
    } catch (err) {
        res.status(500).send({ error: 'failed to fetch data' })
    }
}