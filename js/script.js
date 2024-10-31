// let isDriver = true;

// console.log(2<3);

// let exp1 = true;
// let exp2 = false;

// if (exp1 && exp2){
//     console.log("La condición es true")
// }

// let animals = ["cat", "dog", "fish", "bird"];

// console.log(animals);

// let arr_cars = ["Volvo", "BMW", "Ford", 531, false, ["Kia", "Renault"]];

// const USER = {
//     id: 354,
//     name: "Ricardo",
//     lastname: "Gracia",
//     age: 22,
//     location: [12.1513501935, 95.231124145155],
//     is_driver: true,
// }

// console.log("Hola", USER.name);

// prompt() me permite generar un popup con un input de texto

// let user_input= window.prompt("Hola, nombre?");

// console.log("Un placer " + user_input);

// Crear una función que se llame greetUser() y que haga 2 cosas:
//  Preguntar al usuario su nombre y guardar la respuesta.
// Mostrar el nombre del usuario junto con un saludito de texto en una ventana pop up
// La llamada o invocación de la función greetUser() se encontrará en un botón de mi web, donde el usuario hará click. PISTA: el botón en el html debe tener un evento OnClick y dentro de mi función greetUser() usaré dos funciones built-in de JS.

// SELECTORES DE JS

// let titleH1 = document.getElementsByTagName("h1");
// console.log(titleH1);

// let subtitles = document.getElementsByClassName("subtitle");
// console.log(subtitles);

// let menu= document.getElementById("menu");
// console.log(menu);

// let sp_title = document.querySelector("#spTitle");
// console.log(sp_title);

// let title = document.querySelector("h1");
//console.log(title.textContent); //GET

// title.textContent = "Elden Ring, skrrrrrrrrrrrrrrrrrrrrrrrr"; //SET

// title.style.color = "red";

// PODEMOS AÑADIR UNA FUNCIÓN DE CAMBIO DE MODO CLARO / OSCURO MEDIANTE CSS A LA WEB DE LA ENTREGA

//Definimos y asignamos un evento click al botón #btnGreet para que cuando detecte el click, llame a la función greetUser

// 1. Seleccionamos el botón

// 2. Asignamos el evento al botón

// 3. Llamamos a la función dentro del evento

// function greetUser(){
//     let user_input= window.prompt("Hola, nombre?");
//     alert("Bienvenido " + user_input);
// }

// let btn = document.querySelector("#btnGreet");

// btn.addEventListener("click", function(){
//     greetUser();
// });

// Acabamos de hacer una función en la que el usuario al darle al botón de Greet que hemos asignado en el index.html directamente desde el JS y no usando el código onclick dentro del index.html, haciendo que esto sea mucho más eficiente.

let title = document.querySelector("#h1Title");
let h2title = document.querySelector("#h2Title")

title.addEventListener("mouseover", function(){
    title.style.backgroundColor = "red";
    h2title.textContent = "Has hecho Mouseover!";
});

title.addEventListener("mouseout", function(){
    title.style.backgroundColor = null;
    h2title.textContent = "Título Especial";
});

//Cuando el usuario pase con el cursor por encima del titulo de la web, el color del fondo del header debe cambiar.
// Extra: cuando el cursos del usuario salga del titulo el color del header debe volver a ser el original.
// Extra2: cuando el cursor pase por encima del título, cambiar el texto del h2 y asignarle "Has hecho mouseover!"
// Pista: Los eventos en los que se divide el hover de JS son mouseover y mouseout.