//Ejercicios obligatorios
class Persona {
    constructor (name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
        }
        obtDetalles = () => {
            console.log ("detalles personales: ", this.name, this.age, this.gender)
        }
}
 const guy = new Persona ('Peio', 28, "male")
 guy.obtDetalles ()
 

 class Student extends Persona {
    constructor (name, age, gender, grade, group) {
        super (name, age, gender)
            this.grade = grade
            this.group = group
    }
        registrar = () => {
            console.log("detalles de estudiante:", this.name, this.age, this.gender, this.grade, this.group) 
        }
 }
 const pupil = new Student ('Sandra', 20, "female", 3, "A")
 pupil.registrar ()
 

 class Teacher extends Persona {
    constructor (name, age, gender, subject, level) {
        super (name, age, gender)
            this.subject = subject
            this.level = level
    }
    asignar = () => {
        console.log("detalles de profesor/a:", this.name, this.age, this.gender, this.subject, this.level)
    }
 }
 const teacher = new Teacher ('Katalin', 30, "female", "Anthropology", 5) 
 teacher.asignar ()
 




 //Ejercicio extra Maya-Azteca