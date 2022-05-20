var pantalla_dibujo = document.querySelector("#dibujo");
var pincel = pantalla_dibujo.getContext("2d");
    pincel.strokeStyle = "#0A3871";
    pincel.beginPath()
    pincel.moveTo(0, 350);
    pincel.lineWidth = 4,5;
    pincel.lineTo(300, 350);
    pincel.stroke();