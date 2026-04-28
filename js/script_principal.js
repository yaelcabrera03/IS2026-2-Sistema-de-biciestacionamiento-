let usuario = localStorage.getItem("usuario");

document.getElementById("bienvenida").innerHTML = "Bienvenido usuario" + usuario;

function cerrarSesion(){
    localStorage.removeItem("usuario");
    window.localStorage.href="/index.html":
}

document.getElementById("cerrarSesion") addEventListener("click",cerrarSesion);