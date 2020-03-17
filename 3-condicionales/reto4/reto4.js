var edadPerruna = 0;
const edadaUno = 15;
const edadDos = 9;
const edadTres = 5;

edadPerruna = parseInt(prompt("Ingrese la edad de su perro "));

if (edadPerruna === 1) {
    let i = edadPerruna * edadaUno;
    console.log("La edad de su perro en años humanos es de: " + i + " Años");
} else if (edadPerruna === 2) {
    let j = edadaUno + edadDos;
    console.log("La edad de su perro en años humanos es de: " + j + " Años");
} else if (edadPerruna >= 3) {
    let edad = edadaUno + edadDos;
    let totaledad = ((edadPerruna - 2) * edadTres) + edad;
    console.log("La edad de su perro en años humanos es de: " + totaledad + " Años");
}