let usuario = localStorage.getItem("usuario");

document.getElementById("msjBienvenida").innerHTML = "Bienvenido, " + usuario;
document.getElementById("cerrarSesion").addEventListener("click",cerrarSesion);
function cerrarSesion(){
    localStorage.removeItem("usuario");
    window.location.href="../pages/principal.html";
}

