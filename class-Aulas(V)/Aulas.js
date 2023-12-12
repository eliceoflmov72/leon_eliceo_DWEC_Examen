
class Aula {
    constructor(numero, capacidad) {
        this.numero = numero;
        this.capacidad = capacidad;
    };

    presentarMateriales() {
        return `Bienvenidos al aula ${this.numero}, tiene una capacidad de ${this.capacidad} personas.`;

    };
};

let objetoAula = new Aula(1, 20);
console.log(objetoAula.presentarMateriales());

class Musica extends Aula{
    constructor(numero, capacidad, instrumento) {
        super(numero, capacidad);
        this.instrumento = instrumento;
    };

    presentarMateriales () {
        return `Bienvenidos al aula de música número ${this.numero}. Hoy presentaremos los materiales necesarios para la clase de ${this.instrumento}, solamente tenemos ${this.capacidad}`;
    };
};

let objetoMusica = new Musica(2, 10, "saxofón");
console.log(objetoMusica.presentarMateriales());

class Tecnología extends Aula{
    numeroMaximoInstrumentos = 10
    constructor(numero, capacidad, cantidadOrdenadores) {
        this.cantidadOrdenadores = cantidadOrdenadores;
        super(numero, capacidad);
    };

    presentarMateriales () {
        return `Bienvenidos al aula de tecnología número ${this.numero}. El día de hoy tenemos comprados ${this.cantidadOrdenadores} para aprender a programar, en total ahora tenemos ${this.capacidad} estudiantes de capacidad.`
    };
};

let objetoTecnologia = new Musica(3, 30, "saxofón");
console.log(objetoTecnologia.presentarMateriales());


