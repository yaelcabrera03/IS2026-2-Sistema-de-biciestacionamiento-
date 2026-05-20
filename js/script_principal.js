let usuario = localStorage.getItem("usuario");

document.getElementById("msjBienvenida").innerHTML = "Bienvenido, " + usuario;
document.getElementById("cerrarSesion").addEventListener("click",cerrarSesion);
document.getElementById("opAyuda").addEventListener("click",redirigirAyuda);
document.getElementById("opcion_Cuenta").addEventListener("click",redirigirCuenta)
document.getElementById("opcionHeader").addEventListener("click",redirigirPrincipal);
function cerrarSesion(){
    localStorage.removeItem("usuario");
    window.location.href="../index.html";
}
function redirigirAyuda(){
    window.location.href="QA.html";
}
function redirigirCuenta(){
    window.location.href = "cuenta.html";
}
function redirigirPrincipal(){
    window.location.href="principal.html";
}



