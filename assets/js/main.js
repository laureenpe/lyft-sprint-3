window.onload = function() { //este evento hace que cuando la pagina se cargue se llamen las funciones
    document.getElementById("start").addEventListener("click", ocultarLista);
    document.getElementById("box").addEventListener("click", mostrarCaja); //para interactuar los listeners
    // document.getElementById("start").addEventListener("click", startGame);

}

function myFunction() {
    alert("Thanks for signing up");

}


function mostrarCaja() {
    console.log('works!');
    document.getElementById("start").classList.remove('ocultar'); //busco en el html lo que esta oculto para que aparezca

}

function ocultarLista() {
    document.getElementById("box").classList.add('ocultar'); //con este busco nuevamente agregarle la propiedad para que se oculte 

}

/*Game
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);
var fondo = document.getElementById("dibujar");
var papel = fondo.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", x - 1, y - 1, x + 1, y + 1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento) {
    var colorcito = "#FAA";
    var movimiento = 5;
    switch (evento.keyCode) {
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
            break;
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
            break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
            break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
            break;
    }
}*/