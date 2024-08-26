// Student decorator
function addStudentDecorator<T extends { new (...args: any[]): {} }>(target: T) {
    return class extends target {
        id!: string;
        rollNumber!: number;
        age!: number;
        type = 'student';

        constructor(...args: any[]) {
            const [name, id, rollNumber, age] = args;
            super(name);  // Pass only the name to the base class
            this.id = id;
            const student = new StudentClass(rollNumber, age);
            this.rollNumber = student.rollNumber;
            this.age = student.age;
        }
    };
}

// Teacher decorator
function addTeacherDecorator<T extends { new (...args: any[]): {} }>(target: T) {
    return class extends target {
        id!: string;
        subject!: string;
        experience!: number;
        type = 'teacher';

        constructor(...args: any[]) {
            const [name, id, subject, experience] = args;
            super(name);  // Pass only the name to the base class
            this.id = id;
            const teacher = new TeacherClass(subject, experience);
            this.subject = teacher.subject;
            this.experience = teacher.experience;
        }
    };
}

// Classes for student and teacher
class StudentClass {
    rollNumber: number;
    age: number;
    constructor(rollNumber: number, age: number) {
        this.rollNumber = rollNumber;
        this.age = age;
    }
}

class TeacherClass {
    subject: string;
    experience: number;
    constructor(subject: string, experience: number) {
        this.subject = subject;
        this.experience = experience;
    }
}

// Example for a Student
@addStudentDecorator
class UserClass {
    name: string;

    constructor(name: string, id?: string, rollNumber?: number, age?: number) {
        this.name = name;
    }
}

// Example for a Teacher
@addTeacherDecorator
class UserClassOne {
    name: string;

    constructor(name: string, id?: string, subject?: string, experience?: number) {
        this.name = name;
    }
}

// Create a student instance
let studentUser = new UserClass('Alice', 'S01', 1001, 20);
console.log(studentUser);  // This will print the student details

// Create a teacher instance
let teacherUser = new UserClassOne('Bob', 'T01', 'Math', 10);
console.log(teacherUser);  // This will print the teacher details
