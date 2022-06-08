
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
    [80,350,80,10],
    [79,10,251,10],
    [250,10,250,50],
    [250,110,250,240],
    [250,110,210,160],
    [250,110,290,160],
    [250,240,210,290],
    [250,240,290,290]
    ]  
    const endGame = () => {
        document.removeEventListener('keydown', event);
        //startButton.style.display = 'block';
        //wordButton.style.display = 'block';
    }
    
    const letterEvent = event => {
        
    
    };
    document.addEventListener('keydown', (event) => {
        var keyValue = event.key;
        var codeValue = event.code;
    
        if(validar_letra(keyValue)){
            var i = 0;
            var j = 0;
            var ref = 0;
            while(i<letras){
                var letra_p = palabra_seleccionada.charAt(i);
                if(keyValue.toUpperCase() == letra_p.toUpperCase()  && letra_correcta<=letras){
                    var p = document.getElementById(ID_letra[i]);
                    p.innerHTML = letra_p.toUpperCase();
                    j++;
                    if(!letras_correctas_no_repetir.includes(keyValue)){
                        letra_correcta++;
                    }
                }
                i++;     
            }
            if(j>0){
                letras_correctas_no_repetir.push(keyValue);
                console.log(letras_correctas_no_repetir);
            }
            
            if(j==0){
                //acciones de dibujo y a;adir letra errorea, ojo hay que crear otro div que contenga las letras erroneas con una etiqueta p
                    //Ahnadir letra incorrecta
                    if(!letras_Error.includes(keyValue)){
                        if(letra_correcta<=letras && iI < 9){ 
                            letras_Error.push(keyValue);
                            var idError = "LE"+iE;
                            letraError.appendChild(construir_P("","letraError",idError));
                            var p = document.getElementById(idError);
                            p.innerHTML = keyValue.toUpperCase();
                            iE++;
                            // dibujo
                            if(iE != 4 && iI <9 && letra_correcta <= letras){
                                console.log(letra_correcta);
                                pincel.beginPath()
                                pincel.moveTo(xy_dibujo[iD][0],xy_dibujo[iD][1]);
                                pincel.lineWidth = 4,5;
                                pincel.lineTo(xy_dibujo[iD][2],xy_dibujo[iD][3]);
                                pincel.stroke();
                                iD++;
                            }else if(iE == 4 && letra_correcta <= letras){
                                pincel.beginPath()
                                pincel.lineWidth = 4,5;
                                pincel.arc(250, 80, 30,0,2*3.14)
                                pincel.stroke();
                            }
                            iI++;
                        }
                    }
    
            }
    
            var mensaje = document.querySelector("#panel-mensaje");
                if(letra_correcta == letras){
                    valor_teclado = true;
                    mensaje.appendChild(construir_P("!Felicidades Ganaste!","mensaje","ganaste")); 
                    letra_correcta = 10;
                    //falta detener el evento de teclado, no se como hacerlo, pensar despues :c
                }else if(iI == 9){
                    mensaje.appendChild(construir_P("!Limite de intentos alcanzados, Perdiste!","mensaje","perdiste"));
                    valor_teclado = true;
                    iI = 10;
                }
        }
            
      }, false);

function construir_P(texto,clase,id){
    var p = document.createElement("p");
    p.classList.add(clase);
    p.setAttribute("id",id);
    p.textContent = texto;
    return p;
}


function validar_letra(letra){
    var letra_codigo = letra.charCodeAt(0);
    var valor_letra = false;
    if(((letra_codigo >=65 && letra_codigo <= 90))){
       valor_letra = true;   
    }else{
        valor_letra = false;
    }
    return valor_letra;
}