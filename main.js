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
 const professor = new Teacher ('Katalin', 30, "female", "Anthropology", 5) 
 professor.asignar ()
 




 //Ejercicio extra Maya-Azteca
 class Warrior {
    constructor (life, power) {
        this.life = life
        this.power = power
    }
    power = () => {
        return `Power: ${this.power}`;
    }
    defend = (damage) => {
        this.life -= damage
        return `Vida restante: ${this.life}`;
    }
 }
//  const mightyWarrior = new Warrior(30, 35)
//  mightyWarrior.attack ()

class Maya extends Warrior {
    constructor (life, power, drinkColaCao) {
        this.drinkColaCao = this.power + 10 
    }
    attack = () => {
        console.log ("El ataque es:", this.life, this.power)
    }
 }
const mightyMaya = new Warrior(30, 35)
mightyMaya.attack ()

class Azteca extends Warrior {
    constructor (life, power, drinkNesquik) {
        this.drinkNesquik = life + 10
    }

}
//Introducir defense (damage)