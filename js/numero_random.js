var palabras_predeterminadas = ["papa", "mochila", "alura", "papelera", "teclado", "pantalla", "celular", "pie", "muerte", "pincel"];
var cantidad_palabras = palabras_predeterminadas.length;
var numeros = [];

function numero_random() {
    if (numeros.length >= cantidad_palabras) {
        numeros = [];
    }

    let random;
    do {
        random = Math.floor(Math.random() * cantidad_palabras);
    } while (numeros.includes(random));

    numeros.push(random);
    return random;
}
