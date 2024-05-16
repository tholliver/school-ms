CREATE TABLE IF NOT EXISTS "classrooms" (
	"id" serial PRIMARY KEY NOT NULL,
	"grade" varchar(10) NOT NULL,
	"section" varchar(10) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "classrooms_students" (
	"classroom_id" integer NOT NULL,
	"student_id" integer NOT NULL,
	CONSTRAINT "classrooms_students_classroom_id_student_id_pk" PRIMARY KEY("classroom_id","student_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "grades" (
	"id" serial PRIMARY KEY NOT NULL,
	"score" numeric(5, 2),
	"subject_id" integer,
	"student_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "students" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(50) NOT NULL,
	"lastname" varchar(50) NOT NULL,
	"dob" date DEFAULT now(),
	"mail" varchar(50) NOT NULL,
	"password" varchar(255) NOT NULL,
	"role" varchar DEFAULT 'student',
	"address" varchar(50) NOT NULL,
	"phone" varchar(50) NOT NULL,
	"date_join" timestamp DEFAULT now() NOT NULL,
	"last_update" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "subjects" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(20),
	"description" text,
	"teacher_id" integer,
	"classroom_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "teachers" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(50) NOT NULL,
	"lastname" varchar(50) NOT NULL,
	"dob" date DEFAULT now(),
	"mail" varchar(50) NOT NULL,
	"password" varchar(255) NOT NULL,
	"role" varchar DEFAULT 'teacher',
	"address" varchar(50) NOT NULL,
	"phone" varchar(50) NOT NULL,
	"date_join" timestamp DEFAULT now() NOT NULL,
	"last_update" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(50) NOT NULL,
	"lastname" varchar(50) NOT NULL,
	"mail" varchar(50) NOT NULL,
	"password" varchar(255) NOT NULL,
	"role" varchar NOT NULL,
	"date_join" timestamp DEFAULT now() NOT NULL,
	"phone" varchar(50) NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "classrooms_students" ADD CONSTRAINT "classrooms_students_classroom_id_classrooms_id_fk" FOREIGN KEY ("classroom_id") REFERENCES "public"."classrooms"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "classrooms_students" ADD CONSTRAINT "classrooms_students_student_id_students_id_fk" FOREIGN KEY ("student_id") REFERENCES "public"."students"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "grades" ADD CONSTRAINT "grades_subject_id_subjects_id_fk" FOREIGN KEY ("subject_id") REFERENCES "public"."subjects"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "grades" ADD CONSTRAINT "grades_student_id_students_id_fk" FOREIGN KEY ("student_id") REFERENCES "public"."students"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
