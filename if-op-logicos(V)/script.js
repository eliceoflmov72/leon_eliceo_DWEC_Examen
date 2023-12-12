
function salidarSegunHora() {
    let fecha = new Date();
    let hora = fecha.getHours();
    // Todo esto es para hacer pruebas
    // let hora = 5;

    if (hora >= 5 && hora <=12){
        document.getElementById("resultado").innerHTML = "Buenos días";
    } else if (hora > 12 && hora <=18) {
        document.getElementById("resultado").innerHTML = "Buenas tardes";
    } else {
        document.getElementById("resultado").innerHTML = "Buenas noches";
    };

}

