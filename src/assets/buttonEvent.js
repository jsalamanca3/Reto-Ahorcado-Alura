
/* const inputResetPalabra = getid("buttonreset"); */
const inputAnhadirPalabra = document.getElementById("buttonSave");
const anhadirPalabra = document.getElementById("textField");

let hayCoincidencia = false;

//reacciona con enter el añadir Palabra
document.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        ingresarPalabra(anhadirPalabra.value);
        anhadirPalabra.value="";
    }
});
inputAnhadirPalabra.addEventListener('click', function(){
    ingresarPalabra(anhadirPalabra.value);
    anhadirPalabra.value="";
});

/* inputResetPalabra.addEventListener('click', function(){
    localStorage.clear("palabrasAdicionales");
    alert("Las siguientes palabras fueron eliminadas:" + " " + palabrasAdicionales);
    location.reload();
}); para borrar palabras en el array*/


function ingresarPalabra(valor){
    if(valor.length != 0){
        verificadorAcentos(valor);
        verificadorNumeros(valor);
        verificadorLongitud(valor);
        if(hayCoincidencia==false){
            inicioCadena(valor);
        }
    }else{
        alert("No has ingresado aun palabras.");
    }
}

//inicio de la cadena
function inicioCadena (valor){
    //transforma a mayusculas
    let texto = valor.toUpperCase();
    //verifica si está repetido
    verificarRepetidos(texto);
}

//verificar repetidos
function verificarRepetidos(texto){
    if(palabras.indexOf(texto) != -1 || palabrasAdicionales.indexOf(texto) != -1){
        alert(texto+" "+"ya ha sido ingresada.");
    }else{
        //anhade al array
        push(texto);
    }
}

//anhade las palabras
function push(valor){
    palabras.push(valor);
    palabrasAdicionales.push(valor);
    localStorage.setItem("palabrasAdicionales.", palabrasAdicionales);
}

//verificar acentos
function verificadorAcentos(texto){
    let posicion = texto.search(/á|é|í|ó|ú/g);
    if(posicion != -1){
        alert("No debes poner acentos.");
        hayCoincidencia = true;
        return hayCoincidencia;
    }
    else{
        hayCoincidencia = false;
        return hayCoincidencia;
    }
}

//verificar numeros
function verificadorNumeros(texto){
    let posicion = texto.search(/0|1|2|3|4|5|6|7|8|9/g);
    if(posicion != -1){
        alert("No debes ingresar número.");
        hayCoincidencia = true;
        return hayCoincidencia;
    }
    else{
        hayCoincidencia = false;
        return hayCoincidencia;
    }
}

function verificadorLongitud(texto){
    if(texto.length <= 1){
        alert("Debes ingresar más de una letra.");
        hayCoincidencia = true;
        return hayCoincidencia;
    }
    else{
        hayCoincidencia = false;
        return hayCoincidencia;
    }
}

function getid(str) {
    return document.getElementById(str);
}