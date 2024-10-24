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

// Función que calcula un descuento sobre el precio de un producto

// let prod00 = 59.99;
// let prod01 = 15.99;
// const DISCOUNT30 = 0.3;
// const DISCOUNT50 = 0.5;

function greetUser(){
    let user_input= window.prompt("Hola, nombre?");
    alert("Bienvenido " + user_input)
}

// Crear una función que se llame greetUser() y que haga 2 cosas:
//  Preguntar al usuario su nombre y guardar la respuesta.
// Mostrar el nombre del usuario junto con un saludito de texto en una ventana pop up
// La llamada o invocación de la función greetUser() se encontrará en un botón de mi web, donde el usuario hará click. PISTA: el botón en el html debe tener un evento OnClick y dentro de mi función greetUser() usaré dos funciones built-in de JS.