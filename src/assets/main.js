String.prototype.replace = function(index, character) {

    return this.substr(0, index) + character + this.substr(index+character.length);
}

const palabras = ['casa', 'gato', 'perro', 'cangrejo'];

const palabra = palabras[Math.floor(Math.random()*palabras.length)];
let palabrasConGuiones = palabras.replace(/./g, "_ ");
let contadorFallos = 0;
document.querySelector('#output').innerHTML = palabrasConGuiones;
document.querySelector('#aqui va el boton').addEventListener('click', () => {
    const letra = document.querySelector('#letra').value;
    let haFallado = true;
    for(const i in palabra) {
        if(letra == palabra[i]) {
            palabrasConGuiones = palabrasConGuiones.replaceAt(i*2,letra);
            haFallado = false;
        }
    }
    if(haFallado){
        contadorFallos++;
        document.querySelector('#ahorcado').getElementsByClassName.backgroundPosition = -(307*contadorFallos) + 'px 0';
        if(contadorFallos == 4){
            alert("perdiste el juego")
        }
    }else {
        if (palabrasConGuiones.indexOf('_') <0) {
            document.querySelector('#ganador').getElementsByClassName.display = 'flex';
        }
    }
    document.querySelector('#output').innerHTML = palabrasConGuiones;

    document.querySelector('#letra').value = '';
    document.querySelector('#letra').focus();
});