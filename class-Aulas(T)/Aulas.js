/**
 * Creo el aula de música, con todos los atributos necesarios en el constructor
 * Realizo la función presentarMateriales, con las indicaciones correspondientes
 */
class Aula {
    constructor(numero, capacidad) {
        this.numero = numero;
        this.capacidad = capacidad;
    };

    presentarMateriales() {
        return `Bienvenidos al aula ${this.numero}, tiene una capacidad de ${this.capacidad} personas.`;

    };
};

 /**
  * Creo un objeto de la clase Aula, con el número y la capacidad que aparecen en el enunciado.
  * Saco por la consola puesto que no he usado console.log(), lo he de poner ahora para que pueda aparecer por consola
  */
let objetoAula = new Aula(1, 20);
console.log(objetoAula.presentarMateriales());

/**
 * Creo la clase Música, con extends hago que pueda heredar los métodos de la clase Aula y más tarde heredará también las propiedades del constructor.
 * Reescribo la función presentarMateriales con un return diferente, el que se pide en el enunciado.
 */
class Musica extends Aula{
    constructor(numero, capacidad, instrumento) {
        super(numero, capacidad);
        this.instrumento = instrumento;
    };

    presentarMateriales () {
        return `Bienvenidos al aula de música número ${this.numero}. Hoy presentaremos los materiales necesarios para la clase de ${this.instrumento}, solamente tenemos ${this.capacidad}`;
    };
};

 /**
  * Creo un objeto de la clase Musica, con el número, la capacidad, y el instrumento que aparecen en el enunciado
  * Saco por la consola puesto que no he usado console.log(), lo he de poner ahora para que pueda aparecer por consola
  */
let objetoMusica = new Musica(2, 10, "saxofón");
console.log(objetoMusica.presentarMateriales());


/**
 * Creo la clase Tecnología, con extends hago que pueda heredar los métodos de la clase Aula y más tarde heredará también las propiedades del constructor (numero y capacidad).
 * Reescribo la función presentarMateriales con un return diferente, el que se pide en el enunciado.
 */
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

 /**
  * Creo un objeto de la clase Tecnologia, con el número, la capacidad, y la cantidadOrdenadires que aparecen en el enunciado
  * Saco por la consola puesto que no he usado console.log(), lo he de poner ahora para que pueda aparecer por consola
  */
let objetoTecnologia = new Musica(3, 30, "saxofón");
console.log(objetoTecnologia.presentarMateriales());


