class Persona {
    constructor (name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
        }
        obtDetalles = () => {
            return "detalles de "
        }
}
 const guy = new Persona ('Peio', 28, "male")
 guy.obtDetalles ()
 //console.log (guy)

 class Student extends Persona {
    constructor (name, age, gender, grade, group) {
        super (name, age, gender)
            this.grade = grade
            this.group = group
    }
        registrar = () => {
        return "detalles de estudiante"
        }
 }
 const pupil = new Student ('Sandra', 20, "female", 3, "A")
 pupil.registrar ()
 //console.log (pupil)

 class Teacher extends Persona {
    constructor (name, age, gender, subject, level) {
        super (name, age, gender)
            this.subject = subject
            this.level = level
    }
    asignar = () => {
        return "detalles de profesor/a"
    }
 }
 const teacher = new Teacher ('Katalin', 30, "female", "Anthropology", 5) 
 teacher.asignar ()
 console.log(teacher)