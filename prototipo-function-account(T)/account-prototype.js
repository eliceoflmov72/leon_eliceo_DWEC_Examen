function CuentaBancaria(nombre, dni, saldo = 0) {// Pongo los atributos como indica, especialmente el saldo que pide que valga 0 o lo que aparece en this.saldo, y el numeroCuenta no se incluye en el constructor
// Creo una función prototipo llamada cuentaBancaria
    this.nombre = nombre;
    this.dni = dni;
    this.saldo = saldo; // La otra opción es que sea un parámetro dado por el usuario
    this.numeroCuenta = `ES${Math.floor(Math.random() * 99999999999999999999).toString().padStart(20, '0')}`;
    // 
}



// Métodos del prototipo CuentaBancaria
CuentaBancaria.prototype.mostrarDatos = function () {
    console.log(`Nombre: ${this.nombre}\nDNI: ${this.dni}\nNúmero de Cuenta: ${this.numeroCuenta}\nSaldo: ${this.saldo}€`);
    // Sacamos por consola los datos que se piden en el formato indicado
};

CuentaBancaria.prototype.realizarIngreso = function (monto) {
    // Creación de la función fuera de la creación de la función prototipo, todo se hace mediante una función anónima

    if (monto > 0) {
    // Esto permite que se añada el dinero solo cuando tiene mas de 0
        this.saldo += monto;
        // Añado el dinero que se pasa por parámetro en la función
        console.log(`Ingreso realizado. Nuevo saldo: ${this.saldo}€`);
        // Muestro el dinero que tiene actualmente despues de añadir más
    } else {
    // Si no tiene el suficiente dinero saca un manejo de error, con el siguiente mensaje
        console.log('El monto debe ser un número positivo.');
    }
};

CuentaBancaria.prototype.realizarRetiro = function (monto) {
    if (monto > 0 && monto <= this.saldo) {
    // Condición que permite que se quite del saldo solo si tiene más de 0, es decir si es positivo como se pide y además tambien que si la cantidad es menor que el saldo que tiene actualmente

        this.saldo -= monto;
        // Retirada de la cantidad de saldo que se pasa por parámetro en la función
        console.log(`Retiro realizado. Nuevo saldo: ${this.saldo}€`);
    } else {
        console.log('No se puede realizar el retiro. El monto debe ser un número positivo y menor o igual al saldo disponible.');
    }
};

CuentaBancaria.prototype.realizarTransferencia = function (cuentaDestino, monto) {
    // Creación de la función fuera de la creación de la función prototipo, todo se hace mediante una función anónima, esta vez no solo se pasa por parámetro "moto", ademñas se pasa por parámetro la nueva cuenta de Destino

    if (monto > 0 && monto <= this.saldo) {
        // Se le quiita el saldo a la cuenta que hace el traspaso si ocurre esta condición, que es la misma que cuando se hace el retiro

        this.saldo -= monto;
        // Se quita la cantidad que se pasa por parámetro del saldo de lacuenta

        cuentaDestino.realizarIngreso(monto);
        // Con una referencia a la cuenta de destino se pasa por parámetro mediante la función realizarIngreso la cantidad de dinero que se va a añadir a esa cuenta

        console.log(`Transferencia realizada. Nuevo saldo: ${this.saldo}€`);
        // Saco por pantalla la cantidad de saldo acutal de la cuenta que hizo el infreso
    } else {
        // Si las condiciones del primer if no son true se maneja el error mediante un mensaje
        console.log('No se puede realizar la transferencia. El monto debe ser un número positivo y menor o igual al saldo disponible.');
    }
};

// Instancias de prueba
const cuenta1 = new CuentaBancaria('Juan Pérez', '12345678A', 1000);
// Creación de una cuenta bancaria

const cuenta2 = new CuentaBancaria('Ana Gómez', '87654321B', 500);
// Creación de una cuenta bancaria


cuenta1.mostrarDatos();
// Muestro los datos iniciales de la cuenta 1

cuenta2.mostrarDatos();
// Muestro los datos iniciales de la cuenta 2

cuenta2.realizarIngreso(100);
// Realizo un ingreso a la cuenta

cuenta2.realizarTransferencia(cuenta1, 300);
// Realizo una transferencia desde la cuenta 2 hacia la cuenta 1 de 300

/**
 * Muestro los datos de ambas cuentas después de las operaciones
 */
cuenta1.mostrarDatos();
cuenta2.mostrarDatos();
