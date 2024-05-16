import { relations } from "drizzle-orm";
import { date, integer, pgTable, serial, primaryKey, timestamp, varchar, text, numeric, } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 50 }).notNull(),
    lastname: varchar('lastname', { length: 50 }).notNull(),
    mail: varchar('mail', { length: 50 }).notNull(),
    password: varchar('password', { length: 255 }).notNull(),
    role: varchar('role', { enum: ['director', 'admin'] }).notNull(),
    date_join: timestamp('date_join').notNull().defaultNow(),
    phone: varchar('phone', { length: 50 }).notNull()
}
)

export const students = pgTable('students', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 50 }).notNull(),
    lastname: varchar('lastname', { length: 50 }).notNull(),
    dob: date('dob').defaultNow(),
    mail: varchar('mail', { length: 50 }).notNull(),
    password: varchar('password', { length: 255 }).notNull(),
    role: varchar('role', { enum: ['director', 'admin', 'student'] }).default('student'),
    address: varchar('address', { length: 50 }).notNull(),
    phone: varchar('phone', { length: 50 }).notNull(),
    date_join: timestamp('date_join').notNull().defaultNow(),
    last_update: timestamp('last_update').notNull().defaultNow(),
}
);

export const studentsRelations = relations(students, ({ many }) => ({
    classroomsToStudents: many(classroomsToStudents),
    grades: many(grades)
}))

export const classroomsToStudents = pgTable('classrooms_students', {
    classroom_id: integer('classroom_id').notNull()
        .references(() => classrooms.id),
    student_id: integer('student_id').notNull()
        .references(() => students.id),
}, (t) => ({
    pk: primaryKey({ columns: [t.classroom_id, t.student_id] })
})
)

export const classrooms = pgTable('classrooms', {
    id: serial('id').primaryKey(),
    grade: varchar('grade', { length: 10 }).notNull(),
    section: varchar('section', { length: 10 }).notNull()
    // teacher_id: integer('teacher_id').references(() => teachers.id, { onDelete: 'set null' })
})

// Students classroom relationships

export const teachers = pgTable('teachers', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 50 }).notNull(),
    lastname: varchar('lastname', { length: 50 }).notNull(),
    dob: date('dob').defaultNow(),
    mail: varchar('mail', { length: 50 }).notNull(),
    password: varchar('password', { length: 255 }).notNull(),
    role: varchar('role', { enum: ['director', 'admin', 'teacher'] }).default('teacher'),
    address: varchar('address', { length: 50 }).notNull(),
    phone: varchar('phone', { length: 50 }).notNull(),
    date_join: timestamp('date_join').notNull().defaultNow(),
    last_update: timestamp('last_update').notNull().defaultNow(),
}
);

export const subjects = pgTable('subjects', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 20 }),
    description: text('description'),
    teacher_id: integer('teacher_id'),
    classroom_id: integer('classroom_id')
})

export const subjectsRelations = relations(subjects, ({ one }) => ({
    teacher: one(teachers, {
        fields: [subjects.teacher_id],
        references: [teachers.id]
    }),
    classroom: one(classrooms, {
        fields: [subjects.classroom_id],
        references: [classrooms.id]
    })
}))

export const grades = pgTable('grades', {
    id: serial('id').primaryKey(),
    score: numeric('score', { precision: 5, scale: 2 }),
    subject_id: integer('subject_id').references(() => subjects.id, { onDelete: 'set null' }),
    student_id: integer('student_id').references(() => students.id, { onDelete: 'set null' })
})

export const teacherRelations = relations(
    teachers, ({ many }) => ({
        subjects: many(subjects),
    })
)

export const gradesRelations = relations(grades, ({ one }) => ({
    student: one(students, {
        fields: [grades.student_id],
        references: [students.id]
    }),
    subject: one(subjects, {
        fields: [grades.subject_id],
        references: [subjects.id]
    })
}))

export const classroomsRelations = relations(classrooms, ({ many }) => ({
    subjects: many(subjects),
    classroomsToStudents: many(classroomsToStudents)
}))

export const classroomsToStudentsRelations = relations(classroomsToStudents, ({ one, many }) => ({
    student: one(students, {
        fields: [classroomsToStudents.classroom_id],
        references: [students.id]
    }),
    classroom: one(classrooms, {
        fields: [classroomsToStudents.student_id],
        references: [classrooms.id]
    }),
    // classroomstudents: many(students)
}))


// Mock data 
