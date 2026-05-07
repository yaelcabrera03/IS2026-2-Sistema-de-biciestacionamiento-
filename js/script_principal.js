let usuario = localStorage.getItem("usuario");

document.getElementById("msjBienvenida").innerHTML = "Bienvenido, " + usuario;
document.getElementById("cerrarSesion").addEventListener("click",cerrarSesion);
document.getElementById("opAyuda").addEventListener("click",redirigirAyuda);
function cerrarSesion(){
    localStorage.removeItem("usuario");
    window.location.href="../pages/principal.html";
}
function redirigirAyuda(){
    window.location.href="./pages/QA.html";
}




