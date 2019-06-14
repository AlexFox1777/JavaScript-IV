// CODE here for your Lambda Classes


class Person{
    constructor(props){
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class  Instructor extends Person{
    constructor(props){
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPrase = props.catchPrase;
        // this.subject = props.subject;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
    // setNewGrade(student, score){
    //     return `${student.grade(score).graduate()}`;
    // }
}

class  Student extends Person{
    constructor(props){
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
    }
    listsSubjects(){
        return " student's favoriteSubjects: " + this.favSubjects;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class GradeOfStudent extends Student{
    constructor(props){
        super(props);
        this.grade = props.grade;
    }
    // set grade(score){
    //     // if(score > 0 && score < 100){
    //     //     this.grade = score;
    //     // } else
    //     this.grade = score;
    // }
    // graduate(){
    //     if (this.grade > 70){
    //         return `${this.name} can graduate`;
    //     }else return `${this.name} need to increase his/her score`
    // }
}

class ProjectManager extends Instructor{
    constructor(props){
        super(props);
        this.gradeClassName = props.gradeClassName;
        this.favInstructor = props.favInstructor;

    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

// const fred = new Instructor({
//     name: 'Fred',
//     location: 'Bedrock',
//     age: 37,
//     favLanguage: 'JavaScript',
//     specialty: 'Front-end',
//     catchPhrase: `Don't forget the homies`
// });

//Person test
const masha = new Person({name: 'Masha',
    location: 'Minsk',
    age: 3,});
const pasha = new Person({name: 'Pasha',
    location: 'Barnaul',
    age: 34,});
const sonya = new Person({name: 'Sonya',
    location: 'Novosibirsk',
    age: 23,});
console.log(masha.speak());
console.log(pasha.speak());
console.log(sonya.speak());

//Student test
const studentVasilii = ({name: 'Vasilii',
    location: 'Novosibirsk',
    age: 23,
    previousBackground: 'High school',
    favSubjects: ['physical education', 'math'],
    className: '105 Be',
    grade: 0,
});
const vasilii = new Student(studentVasilii);
console.log(" ===== Student test ===== ");
console.log(`I am ${vasilii.name}`);
console.log(vasilii.listsSubjects());

const anya = new Student({name: 'Anya',
    location: 'Moscow',
    age: 39,
    previousBackground: 'Bachelor',
    favSubjects: ['economy', 'math'],
    className: '93 D'});
console.log(" ===== Student test ===== ");
console.log(`I am ${anya.name}, and I\`m ${anya.age} years old`);
console.log(anya.listsSubjects());
console.log(anya.PRAssignment('math'));

const jone = new Student({name: 'Jone',
    location: 'New York',
    age: 18,
    previousBackground: 'High School',
    favSubjects: ['economy', 'math'],
    className: '93 D'});
console.log(" ===== Student test ===== ");
console.log(`Hi, I am ${jone.name}`);
console.log(jone.listsSubjects());
console.log(jone.sprintChallenge("economy"));

// const gradeOfVasilii = new GradeOfStudent(studentVasilii);
// console.log(" ===== GradeOfStudentTest ===== ");
// gradeOfVasilii.grade(2);
// console.log(gradeOfVasilii.graduate());


//Instructor test

console.log(" ===== Instructor test ===== ");
const deny = new Instructor({name: 'Deny',
    location: 'Novosibirsk',
    age: 23,
    specialty: "system administrator",
    favLanguage: "Linux",
    catchPrase: "Linux is an operating system!"});
console.log(`I am ${deny.name}, and I works as ${deny.specialty} in ${deny.location}`);
console.log(deny.grade(vasilii, 'economy'));

console.log(" ===== Instructor test ===== ");
const natalia = new Instructor({name: 'Natalia',
    location: 'New York',
    age: 50,
    specialty: "Engineer",
    favLanguage: "Assembler",
    catchPrase: "Safely remove your USB flash drives!"});
console.log(`I am ${natalia.name}, and I works as ${natalia.specialty} in ${natalia.location}`);
console.log(natalia.demo('math'));

console.log(" ===== Instructor test ===== ");
const nina = new Instructor({name: 'Nina',
    location: 'New York',
    age: 20,
    specialty: "Engineer",
    favLanguage: "Assembler",
    catchPrase: "Safely remove your USB flash drives!"});
console.log(`I am ${nina.name}, and I works as ${nina.specialty} in ${nina.location}`);
console.log(nina.demo('math'));
console.log(nina.grade(jone, 'economy'));


//PM test

const pmRyan = new ProjectManager({name: 'Ryan',
    location: 'New York',
    age: 30,
    specialty: "Full Stack Web Developer",
    favLanguage: "Java Script",
    catchPrase: "Open your favorite IDE and start coding",
    gradeClassName: "93 D",
    favInstructor: "Jacob"
});
console.log(" ===== ProjectManagerTest ===== ");
console.log(`Hi, I am ${pmRyan.name}`);
console.log(pmRyan.standUp("web21"));

const pmJacob = new ProjectManager({name: 'Jacob',
    location: 'New York',
    age: 30,
    specialty: "Full Stack Web Developer",
    favLanguage: "Java Script",
    catchPrase: "Open your favorite IDE and start coding",
    gradeClassName: "93 D",
    favInstructor: "Ryan"
});
console.log(" ===== ProjectManagerTest ===== ");
console.log(pmJacob.speak());
console.log(pmJacob.debugCode(vasilii, "Python"));