nombre = prompt("Introduce el nombre: ");
apellidos = prompt("Introduce los apellidos: ");
edad = prompt("Introduce la edad: ");
ciclo = prompt("Introduce el ciclo formativo que estas cursando: ","DAW");

document.getElementById("divGeneral").innerHTML += nombre + "<br>";
document.getElementById("divGeneral").innerHTML += apellidos + "<br>";
document.getElementById("divGeneral").innerHTML += edad + "<br>";
document.getElementById("divGeneral").innerHTML += ciclo + "<br>";
