// De esta forma se puede resolver con una función anónima--------------------------------------
// const menu = document.querySelector(".nav-links");
// const icono = document.querySelector(".hamburger");

// icono.addEventListener("click", function() {
//     menu.classList.toggle("active");
// });

// De esta manera se puede resolver con una función flecha--------------------------------------
// const menu = document.querySelector(".nav-links");
// const icono = document.querySelector(".hamburger");

// icono.addEventListener("click", () => {
//     menu.classList.toggle("active");
// });


// De esta manera se puede hacer con una función normal-----------------------------------------
const menu = document.querySelector(".nav-links");
const icono = document.querySelector(".hamburger");

function desplegarMenu () {
    menu.classList.toggle("active");
};

icono.addEventListener("click", desplegarMenu);