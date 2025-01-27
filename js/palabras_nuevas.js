var b_guardar = document.querySelector("#b_guardar");

b_guardar.addEventListener("click", function () {
    var texto = document.getElementById("texto").value;
    var palabras = texto.split("\n").filter(palabra => {
        return palabra.length > 0 &&
            palabra.length <= 8 &&
            /^[A-Za-z]+$/.test(palabra);
    });

    palabras.forEach(palabra => palabras_predeterminadas.push(palabra));
    window.location.href = 'juego.html';
});
