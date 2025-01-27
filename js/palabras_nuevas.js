var b_guardar = document.querySelector("#b_guardar");
var b_cancelar = document.querySelector("#b_cancelar");

b_guardar.addEventListener("click", function () {
    var texto = document.getElementById("texto").value;
    var palabras = texto.split("\n").filter(palabra => {
        palabra = palabra.trim().toUpperCase();
        return palabra.length > 0 &&
            palabra.length <= 8 &&
            /^[A-Z]+$/.test(palabra);
    });

    if (palabras.length > 0) {
        palabras.forEach(palabra => palabras_predeterminadas.push(palabra));
        window.location.href = 'juego.html';
    }
});

b_cancelar.addEventListener("click", function () {
    window.location.href = 'index.html';
});