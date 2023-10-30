class Persona {
    constructor (name, age, gender ) {
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
 console.log (guy)