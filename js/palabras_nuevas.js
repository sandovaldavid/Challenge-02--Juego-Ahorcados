
var b_guardar = document.querySelector("#b_guardar");

b_guardar.addEventListener("click", function(){
    var nuevas_palabras =[];
    var texto = document.getElementById("texto").value;
    nuevas_palabras = texto.split("\n");   
    for(var i=0 ; i<nuevas_palabras.length ; i++){
        if(nuevas_palabras[i]!=""){
            palabras_predeterminadas.push(nuevas_palabras[i]);
            console.log(palabras_predeterminadas);
        }
    }
    // funcion crear elementos de mi pagina juego.html
});



