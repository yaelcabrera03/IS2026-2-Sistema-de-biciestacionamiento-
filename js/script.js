function login() {
    let divMensaje = document.querySelector('#msjLogin');
    let usuario = document.querySelectorAll('.entradaTexto')[0].value;
    let contra = document.querySelectorAll('.entradaTexto')[1].value;

    if (usuario == "admin" && contra == "123") {
        localStorage.setItem("usuario", usuario);
        window.location.href = "../pages/index.html";
    } else {
        divMensaje.innerHTML = "Credenciales incorrectas";
        divMensaje.style.display = "inline-block";
    }
}

const btnIngresar = document.getElementById('btnIngresar');
btnIngresar.addEventListener("click", login);


let usuarioGuardado = localStorage.getItem("usuario");

if (usuarioGuardado) {
    let div = document.getElementById("mensajeBienvenida");

    if (div) {
        div.innerHTML = "Bienvenido " + usuarioGuardado;
        div.style.display = "block";
    }
}
function logout() {
    localStorage.removeItem("usuario");
    window.location.href = "../pages/principal.html";
}