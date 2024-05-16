export interface Subject {
    id: number;
    name: string;
    description: string;
    teacher_id: number;
    classroom_id: number;
    classroom: {
        id: number;
        grade: string;
        section: string;
    };
}

export interface Teacher {
    id: number;
    name: string;
    lastname: string;
    dob: string; // Consider using a Date type if you need to perform date operations
    mail: string;
    role: string;
    address: string;
    phone: string;
    date_join: string; // Consider using a Date type if you need to perform date operations
    last_update: string; // Consider using a Date type if you need to perform date operations
    subjects: Subject[];
}

export interface Student {
    id: number;
    name: string;
    lastname: string;
    dob?: Date;
    mail: string;
    password: string;
    role: 'director' | 'admin';
    address: string;
    phone: string;
    date_join: Date;
    last_update: Date;
}


// FORMS 
export interface rFormData {
    [key: string]: string
}