// account-prototype.js

// Definición del prototipo CuentaBancaria
function CuentaBancaria(nombre, dni, saldo = 0) {
    this.nombre = nombre;
    this.dni = dni;
    this.saldo = saldo;
    this.numeroCuenta = 'ES' + Math.floor(Math.random() * 99999999999999999999).toString().padStart(20, '0');
}

// Métodos del prototipo CuentaBancaria
CuentaBancaria.prototype.mostrarDatos = function () {
    console.log(`Nombre: ${this.nombre}\nDNI: ${this.dni}\nNúmero de Cuenta: ${this.numeroCuenta}\nSaldo: ${this.saldo}€`);
};

CuentaBancaria.prototype.realizarIngreso = function (monto) {
    if (monto > 0) {
        this.saldo += monto;
        console.log(`Ingreso realizado. Nuevo saldo: ${this.saldo}€`);
    } else {
        console.log('El monto debe ser un número positivo.');
    }
};

CuentaBancaria.prototype.realizarRetiro = function (monto) {
    if (monto > 0 && monto <= this.saldo) {
        this.saldo -= monto;
        console.log(`Retiro realizado. Nuevo saldo: ${this.saldo}€`);
    } else {
        console.log('No se puede realizar el retiro. El monto debe ser un número positivo y menor o igual al saldo disponible.');
    }
};

CuentaBancaria.prototype.realizarTransferencia = function (cuentaDestino, monto) {
    if (monto > 0 && monto <= this.saldo) {
        this.saldo -= monto;
        cuentaDestino.realizarIngreso(monto);
        console.log(`Transferencia realizada. Nuevo saldo: ${this.saldo}€`);
    } else {
        console.log('No se puede realizar la transferencia. El monto debe ser un número positivo y menor o igual al saldo disponible.');
    }
};

// Instancias de prueba
const cuenta1 = new CuentaBancaria('Juan Pérez', '12345678A', 1000);
const cuenta2 = new CuentaBancaria('Ana Gómez', '87654321B', 500);

cuenta1.mostrarDatos();
console.log('--------------------------------------------------------------');
cuenta2.mostrarDatos();
cuenta2.realizarIngreso(100);
cuenta2.realizarTransferencia(cuenta1, 300);
console.log('--------------------------------------------------------------');
cuenta1.mostrarDatos();
cuenta2.mostrarDatos();
