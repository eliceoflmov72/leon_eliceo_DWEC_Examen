// Le pido al usuario que introduzca todos los atributos para poder generar todas las líneas necesarias
nombre = prompt("Introduce el nombre: ");
apellidos = prompt("Introduce los apellidos: ");
edad = prompt("Introduce la edad: ");
ciclo = prompt("Introduce el ciclo formativo que estas cursando: ","DAW");

/**
 * En esta parte mediante funciones del DOM, y extrayendo cual es el párrafo añado a un mismo párrafo linea por línea los atributos pedidos ene l enunciado
 */
document.getElementById("divGeneral").innerHTML += nombre + "<br>";
// document.getElementByID("divGeneral") retorna una referencia al elemento que tiene una id llamada divGeneral (es un párrafo)
// Con .innerHTML +=  podremos añadir a ese párrafo referenciado los atributos, gracias a "+=" podremos añadirlo todo el rato al mismo párrafo
document.getElementById("divGeneral").innerHTML += apellidos + "<br>";
document.getElementById("divGeneral").innerHTML += edad + "<br>";
document.getElementById("divGeneral").innerHTML += ciclo + "<br>";
