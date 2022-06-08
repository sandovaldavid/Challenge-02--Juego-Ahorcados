
var palabras_predeterminadas =["papa", "mochila", "alura", "papelera","teclado","pantalla","celular","pie","muerte","pincel"];
var cantidad_palabras = palabras_predeterminadas.length;
var numeros =[];

function numero_random(){
    var random = 0;
    var valor = true;
    if(numeros.length == 0){    
        random = Math.floor(Math.random()*(cantidad_palabras));
        numeros.push(random);
    }
    else{
        while(valor == true){
            random = Math.floor(Math.random()*(cantidad_palabras));
                if(numeros.includes(random)){
                    valor = true;
                }
                else{
                    valor = false;
                    numeros.push(random);
                }
        }
    }
    return random;
}