import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import dbConn from '../db/db-conn'
import { students } from '../db/schema'

export const studentSchema = z.object({
    name: z.string().min(1),
    lastname: z.string().min(1),
    dob: z.string().min(1),
    mail: z.string().min(1),
    password: z.string().min(1),
    address: z.string().min(1),
    phone: z.string().min(1)
})

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        // HERE HANDLE FormData
        console.log('and the plain body: ', req.body);
        const data = req.body
        const result = await dbConn.insert(students).values(data).returning({ studentId: students.id })
        console.log('here should be the array', result);


        res.status(201).send(result)
    } catch (err) {
        res.status(500).send({ error: 'failed to fetch data' + err })
    }
}