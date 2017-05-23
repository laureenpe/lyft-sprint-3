//show up and dissapear

window.onload = function() { //este evento hace que cuando la pagina se cargue se llamen las funciones
    document.getElementById("start").addEventListener("click", mostrarCaja); //para interactuar los listeners
    document.getElementById("start").addEventListener("click", ocultarLista);
    document.getElementById("phone").addEventListener("click", myFunction); //para interactuar los listeners


}

function ocultarLista() {
    document.getElementsByClassName("start").classList.add('ocultar'); //con este busco nuevamente agregarle la propiedad para que se oculte 

}

function mostrarCaja() {
    console.log('works!');
    document.getElementById("start").classList.remove('ocultar'); //busco en el html lo que esta oculto para que aparezca

}

function myFunction() {
    alert("Thanks for signing up");
}