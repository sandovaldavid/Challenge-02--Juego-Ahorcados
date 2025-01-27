var palabra_seleccionada = palabras_predeterminadas[numero_random()];
var letras = palabra_seleccionada.length;
var ID_letra =["L1","L2","L3","L4","L5","L6","L7","L8"];
//var ID_letra_error =["LE1","LE2","LE3","LE4","LE5","LE6","LE7","LE8"];
var letra = document.querySelector("#panel-palabra");
var letraError = document.querySelector("#panel-letra-erronea");
var letras_Error = [];
var iE = 0;
var iD = 0;
var iI = 0;
var letra_correcta = 0 ;
var valor_teclado = false;
var letras_correctas_no_repetir = [];

// deberia hacer una sola funcion, pero no me da tiempo a entrgarlo xd.
for(var i=0 ; i<letras ; i++){
    letra.appendChild(construir_P("_","letra",ID_letra[i]));
}

//------dibujo.js--------
var pantalla_dibujo = document.querySelector("#dibujo");
var pincel = pantalla_dibujo.getContext("2d");
    pincel.strokeStyle = "#0A3871";
    pincel.beginPath()
    pincel.moveTo(0, 350);
    pincel.lineWidth = 4,5;
    pincel.lineTo(300, 350);
    pincel.stroke();

var xy_dibujo = [
    [80, 350, 80, 10],     // poste vertical
    [79, 10, 251, 10],     // poste horizontal superior
    [250, 10, 250, 50],    // soga
    {                    // cabeza (círculo)
        type: 'circle',
        x: 250,
        y: 80,
        radius: 30
    },
    [250, 110, 250, 240],  // cuerpo
    [250, 110, 210, 160],  // brazo izquierdo
    [250, 110, 290, 160],  // brazo derecho
    [250, 240, 210, 290],  // pierna izquierda
    [250, 240, 290, 290]   // pierna derecha
]; 
    
function endGame() {
    document.removeEventListener('keydown', letterEvent);
}

document.addEventListener('keydown', letterEvent);

function letterEvent(event) {
    if (valor_teclado) return;

    let letra = event.key.toUpperCase();
    if (!validar_letra(letra)) return;

    if (letras_Error.includes(letra)) return;

    let encontrado = false;
    for (let i = 0; i < letras; i++) {
        if (palabra_seleccionada[i].toUpperCase() === letra) {
            document.getElementById(ID_letra[i]).textContent = letra;
            encontrado = true;
            if (!letras_correctas_no_repetir.includes(letra)) {
                letra_correcta++;
                letras_correctas_no_repetir.push(letra);
            }
        }
    }

    if (!encontrado) {
        letras_Error.push(letra);
        letraError.appendChild(construir_P(letra, "letraError", "LE" + iE++));
        iI++;
        dibujarError();
    }

    verificarFinJuego();
}

function validar_letra(letra) {
    return /^[A-Z]$/.test(letra);
}

function verificarFinJuego() {
    const mensaje = document.querySelector("#panel-mensaje");
    if (letra_correcta === letras) {
        valor_teclado = true;
        mensaje.appendChild(construir_P("¡Felicidades Ganaste!", "mensaje", "ganaste"));
        endGame();
    } else if (iI >= xy_dibujo.length) {
        valor_teclado = true;
        mensaje.appendChild(construir_P(`¡Perdiste! La palabra era: ${palabra_seleccionada}`, "mensaje", "perdiste"));
        endGame();
    }
}

function construir_P(texto,clase,id){
    var p = document.createElement("p");
    p.classList.add(clase);
    p.setAttribute("id",id);
    p.textContent = texto;
    return p;
}

function dibujarError() {
    if (iI >= xy_dibujo.length) return;

    let figura = xy_dibujo[iI];
    pincel.beginPath();

    if (figura.type === 'circle') {
        pincel.arc(figura.x, figura.y, figura.radius, 0, Math.PI * 2);
    } else {
        pincel.moveTo(figura[0], figura[1]);
        pincel.lineTo(figura[2], figura[3]);
    }

    pincel.stroke();
}