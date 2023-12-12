// De esta forma se puede resolver con una función anónima--------------------------------------
// const menu = document.querySelector(".nav-links");
// const icono = document.querySelector(".hamburger");

// icono.addEventListener("click", function() {
//     menu.classList.toggle("active");
// });

// De esta manera se puede resolver con una función flecha--------------------------------------
const menu = document.querySelector(".nav-links");
// Creo una constante que guarde una referencia al menú hamburguesa
const icono = document.querySelector(".hamburger");
// Creo una constante que guarde una referencia al icono, que es el siguiente elemento al menu hamburguesa (ul)

icono.addEventListener("click", () => {
    // Mediante una función flecha hago que cada vez que hace click haga la parte que se encuentra en la función flecha (mostrar el menú)

    menu.classList.toggle("active");
    // Añado a active a la referencia de la clase del menú como parte de la función, esto permite que se pueda mostrar el menú
});



// De esta manera se puede hacer con una función normal-----------------------------------------

// const menu = document.querySelector(".nav-links");
// // Creo una constante que guarde una referencia al menú hamburguesa

// const icono = document.querySelector(".hamburger");
// // Creo una constante que guarde una referencia al icono, que es el siguiente elemento al menu hamburguesa (ul)

// function desplegarMenu () {
// // Creo la función desplegarMenu

//     menu.classList.toggle("active");
//     // Añado a active a la referencia de la clase del menú como parte de la función, esto permite que se pueda mostrar el menú
// };

// icono.addEventListener("click", desplegarMenu);
// // Mediante un addEventListener al que añado como argumentos 2 parámetros: "click" que es la acción que hace que inicie la función, y "desplegarMenu" que es la acción que hace que el menú pueda aparecer