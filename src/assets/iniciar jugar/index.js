const palabrasAnhadidas = document.querySelectorAll(".li-palabras-anhadidas");
const palabrasContainer = document.querySelector(".ul-palabras-anhadidas");

let palabras = [
    "pera",
    "saco",
    "automovil",
    "ausente",
    "dulce",
    "televisor",
    "gato",
    "computador",
    "css",
    "microfono",
    "arbol",
    "repositorio"
];
let palabrasAdicionales = [];

//carga las palabras guardadas al iniciarse la página
document.addEventListener("DOMContentLoaded", function(){
    let palabrasGuardadas = localStorage.getItem("palabrasAdicionales");
    let palabrasCargadas = palabrasGuardadas.split(',');
    palabrasAdicionales = palabrasCargadas;
    localStorage.setItem("palabrasAdicionales", palabrasCargadas);
    let palabrasIniciadas = palabras.concat(palabrasAdicionales);
    palabras = palabrasIniciadas;
});

function random(numMinimo, numMaximo){
    const amplitudValores = numMaximo - numMinimo;

    valorAleatorio = Math.floor(Math.random() * amplitudValores) + numMinimo;
    return valorAleatorio;
}

function getid(str){
    return document.getElementById(str);
}

function upperCase(txt){
    const txtUpper = txt.toUpperCase();{
    return txtUpper;
    }
}