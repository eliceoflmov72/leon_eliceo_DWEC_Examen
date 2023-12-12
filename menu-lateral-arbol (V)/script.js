// Seleccionamos de todos los divs que hay aquellos que tienen la clase "arrow", lo guardamos como un array (son los iconos flecha)
let flechas = document.querySelectorAll(".arrow");

// Todos los elementos del array son recorridos con un for each con un índice llamado flecha
flechas.forEach(flecha => {
    // Aquí hago una función anónima, la cual se ejecuta cuando haces click en cualquier icono ya que hemos seleccionado todos
    flecha.addEventListener("click", function() {

        // Guardo en una constante en este caso el siguiente div del padre en el que se encuentra la flecha
        const menuDebajo = this.parentElement.nextElementSibling;
        // parentElement --> Quiere decir que selecciona el elemento padre en el que se encuentra el elemento
        // nextElementSibling --> Quiere decir que selecciona el
        menuDebajo.classList.toggle("show");
        this.classList.toggle("rotate-arrow");
    });
});





