import { date, pgTable, serial, timestamp, varchar, } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 50 }).notNull(),
    lastname: varchar('lastname', { length: 50 }).notNull(),
    mail: varchar('mail', { length: 50 }).notNull(),
    password: varchar('password', { length: 255 }).notNull(),
    role: varchar('role', { enum: ['director', 'admin'] }).notNull(),
    date_join: timestamp('timestamp1').notNull().defaultNow(),
    phone: varchar('phone', { length: 50 }).notNull()
}
)

export const students = pgTable('students', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 50 }).notNull(),
    lastname: varchar('lastname', { length: 50 }).notNull(),
    dob: date('dob'),
    mail: varchar('mail', { length: 50 }).notNull(),
    password: varchar('password', { length: 255 }).notNull(),
    role: varchar('role', { enum: ['director', 'admin'] }).notNull(),
    address: varchar('address', { enum: ['director', 'admin'] }).notNull(),
    phone: varchar('name', { length: 50 }).notNull(),
    date_join: timestamp('date_join').notNull().defaultNow(),
    last_update: timestamp('last_update').notNull().defaultNow(),
}
);

export const teachers = pgTable('teachers', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 50 }).notNull(),
    lastname: varchar('lastname', { length: 50 }).notNull(),
    dob: date('dob'),
    mail: varchar('mail', { length: 50 }).notNull(),
    password: varchar('password', { length: 255 }).notNull(),
    role: varchar('role', { enum: ['director', 'admin'] }).notNull(),
    address: varchar('address', { enum: ['director', 'admin'] }).notNull(),
    phone: varchar('name', { length: 50 }).notNull(),
    date_join: timestamp('date_join').notNull().defaultNow(),
    last_update: timestamp('last_update').notNull().defaultNow(),
}
);