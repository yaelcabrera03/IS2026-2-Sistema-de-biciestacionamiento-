async function login() {
    let divMensaje = document.querySelector('#msjLogin');
    let usuario = document.querySelectorAll('.entradaTexto')[0].value;
    let contra = document.querySelectorAll('.entradaTexto')[1].value;

    const { data, error } = await db
        .from('Usuario')
        .select('*')
        .eq('correo', usuario)
        .eq('password', contra);

    if (error) {
        divMensaje.innerHTML = "Error de conexión: " + error.message;
        divMensaje.style.display = "inline-block";
        divMensaje.style.color = "darkred";
        return;
    }

    if (data.length > 0) {
        localStorage.setItem("usuario", data[0].nombre); 
        divMensaje.innerHTML = "Login correcto";
        divMensaje.style.display = "inline-block";
        divMensaje.style.color = "green";
        window.location.href = "./pages/principal.html";
    } else {
        divMensaje.innerHTML = "Credenciales incorrectas";
        divMensaje.style.display = "inline-block";
        divMensaje.style.color = "darkred";
    }
}

const btnIngresar = document.getElementById('btnIngresar');
btnIngresar.addEventListener("click", login);


let usuarioGuardado = localStorage.getItem("usuario");

if (usuarioGuardado) {
    let div = document.getElementById("mensajeBienvenida");

    /*if (div) {
        div.innerHTML = "Bienvenido " + usuarioGuardado;
        div.style.display = "block";
    }*/
}
function logout() {
    localStorage.removeItem("usuario");
    window.location.href = "../pages/principal.html";
}