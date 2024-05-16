import type { NextApiRequest, NextApiResponse } from 'next'
import dbConn from '../db/db-conn'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const result = await dbConn.query.teachers.findMany({
            with: {
                subjects: true
            }
        });
        res.status(200).send(result)
    } catch (err) {
        res.status(500).send({ error: 'failed to fetch data' })
    }
}