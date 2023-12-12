function salidarSegunHora() {
// Creamos la función con el nombre señalado, sin parámetros de entrada

    let fecha = new Date();
    // Creamos un nuevo objeto en el que se guarda la fecha actual gracias la función Date() con el que sacaremos la fecha actual

    let hora = fecha.getHours();
    // Creamos otro objeto con el que sacaremos la hora concreta, solo la hora

    if (hora >= 5 && hora <=12){
    // Esta es la primera condición que pide el enunciado

        document.getElementById("resultado").innerHTML = "Buenos días";
        // Añadimos al párrafo concreto el mensaje correspondiente

    } else if (hora > 12 && hora <=18) {
    // Segunda condición que pide el enunciado

        document.getElementById("resultado").innerHTML = "Buenas tardes";
        // Añadimos al párrafo concreto el mensaje correspondiente

    } else {
        document.getElementById("resultado").innerHTML = "Buenas noches";
        // Añadimos al párrafo concreto el mensaje correspondiente
    };

}

