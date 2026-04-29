let usuario = localStorage.getItem("usuario");

document.getElementById("mensaje").innerHTML = "Bienvenido usuario" + usuario;

function cerrarSesion(){
    localStorage.removeItem("usuario");
    window.location.href="../pages/principal.html";
}

document.getElementById("cerrarSesion").addEventListener("click",cerrarSesion);