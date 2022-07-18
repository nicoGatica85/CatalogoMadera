function accion() {
    /*var ancla = document.getElementByClassName("nav-enlace");*/
    var anclaje = document.getElementsByClassName('nav-enlace');
    for(var i = 0; i < anclaje.length; i++) {
        anclaje[i].classList.toggle('off')
    }
    
}