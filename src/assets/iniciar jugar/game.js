const accion = id("start-game");
const imagen = id("image");
const accion_letters = document.querySelectorAll("#letters button");

const palabras = [
    'pera',
    'saco',
    'automovil',
    'ausente',
    'dulce',
    'televisor',
    'gato',
    'computador',
    'css',
    'microfono',
    'arbol',
    'repositorio',
];


let palabrita;
let cant_errores = 0; //cuantas veces me equivoqué
let cant_aciertos = 0; //cuantas letras acerté

/* click en iniciar juego */
accion.addEventListener("click", start);

function start(event) {
    imagen.src = "src/imagenes/ahorcado/img0.png";
    accion.disabled = true;
    cant_errores = 0;
    cant_aciertos = 0;

    const parrafo = id("word-guess");
    parrafo.innerHTML = "";

    const cant_palabras = palabras.length;
    const valor_al_azar = obtener_random(0, cant_palabras);

    palabrita = palabras[valor_al_azar];
    console.log(palabrita);
    const cant_letters = palabrita.length;

    for (let i = 0; i < accion_letters.length; i++) {
        accion_letters[i].disabled = false;
    }

    for (let i = 0; i < cant_letters; i++) {
        const span = document.createElement("span");
        parrafo.appendChild(span);
    }
}

/* click de adivinar letra */
for (let i = 0; i < accion_letters.length; i++) {
    accion_letters[i].addEventListener("click", click_letters);
}

function click_letters(event) {
    const spans = document.querySelectorAll("#word-guess span");
    const button = event.target; //cuál de todas las letras, llamó a la función.
    button.disabled = true;

    const letter = button.innerHTML.toLowerCase( );
    const palabra = palabrita.toLowerCase( ); //.toLowerCase( ); para letras minúsculas // .toUpperCase( ) para letras mayúsculas

    let acerto = false;
    for (let i = 0; i < palabra.length; i++) {
        if (letter == palabra[i]) {
            //la variable i es la posición de la letra en la palabra.
            //que coincide con el span al que tenemos que mostarle esta letra...
            spans[i].innerHTML = letter;
            cant_aciertos++;
            acerto = true;
        }
    }

    if (acerto == false) {
        cant_errores++;
        const source = `src/imagenes/ahorcado/img${cant_errores}.png`;
        imagen.src = source;
    }

    if (cant_errores == 6) {
        id("result").innerHTML = "Perdiste, la palabra era " + palabrita;
        game_over();
    } else if (cant_aciertos == palabrita.length) {
        id("result").innerHTML = "GANASTE!! WIIIIII";
        game_over();
    }
}

/* fin del juego */
function game_over() {
    for (let i = 0; i < accion_letters.length; i++) {
        accion_letters[i].disabled = true;
    }

    accion.disabled = false;
}

game_over();
