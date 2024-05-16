import type { NextApiRequest, NextApiResponse } from 'next'
import { z, ZodError } from 'zod'
import dbConn from '../db/db-conn'
import { teachers } from '../db/schema'
import { createInsertSchema } from 'drizzle-zod'

// export const teacherSchema = z.object({
//     name: z.string().min(1),
//     lastname: z.string().min(1),
//     dob: z.string().min(1),
//     mail: z.string().min(1),
//     password: z.string().min(1),
//     address: z.string().min(1),
//     phone: z.string().min(1)
// })

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const data = req.body
        const insertTeacherSchema = createInsertSchema(teachers, {
            mail: (schema) => schema.mail.email(),
            role: (schema) => schema.role.optional(),
            dob: (schema) => schema.dob.date()
        })

        const newTeacher = insertTeacherSchema.parse(data)
        // [] Here do all the trow validations | DO NOT SHOW DB errors

        const result = await dbConn.insert(teachers).values(newTeacher).returning({ studentId: teachers.id })
        console.log('here should be the array', result);

        res.status(201).send(result)
    } catch (err) {
        if (err instanceof ZodError) {
            res.status(400).send(err.message)
        }
        console.log('On backend error' + err);
        res.status(500).send('failed to push data' + err)
    }
}


export function validateData(schema: z.ZodObject<any, any>) {
    return (data: any) => {
        try {
            return schema.parse(data)
        } catch (error) {
            if (error instanceof ZodError) {

                // const errorMessages = error.errors.map((issue: any) => {
                //     message: `${issue.p}`
                // })
            }
        }
    }
}