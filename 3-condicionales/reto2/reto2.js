'use strict';
const h1dElement = document.querySelector('.h1');
var nombre = '';

nombre = prompt("ingresa el nombre del usuario ");
if (nombre === "Julieth" || nombre === "Aleja") {
    h1dElement.innerHTML = 'Bienvenidos';
}
else if (nombre != "Julieth" || nombre != "Aleja") {
    h1dElement.innerHTML = 'Nombre de usuario incorrecto';
}