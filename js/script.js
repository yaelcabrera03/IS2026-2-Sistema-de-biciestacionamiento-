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
        //divMensaje.style.color = "darkred";
        return;
    }

    if (data.length > 0) {
        localStorage.setItem("usuario", data[0].nombre);
        localStorage.setItem("rol",data[0].id_rol);
        divMensaje.innerHTML = "Login correcto";
        divMensaje.style.display = "inline-block";
        const idRol = Number(localStorage.getItem("rol"));
        if(idRol == 3) window.location.href = "./pages/principal_administrador.html";
        else window.location.href = "./pages/principal.html";
    } else {
        divMensaje.innerHTML = "Datos incorrectos";
        divMensaje.style.display = "inline-block";
       
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

var coll = document.getElementsByClassName("colapsable");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
} 
let modoOscuro = localStorage.getItem('modoOscuro');
const cambiar_tema = document.getElementById('cambiarTema');
const activar = () => {
    document.body.classList.add('modoOscuro');
    localStorage.setItem('modoOscuro',"active");
}
const desactivar = () => {
    document.body.classList.remove('modoOscuro');
    localStorage.setItem('modoOscuro',null);
}
if(modoOscuro ==='active'){
    activar();
}
cambiar_tema.addEventListener("click", ()=>{
    modoOscuro = localStorage.getItem('modoOscuro');
    modoOscuro !== "active" ? activar() : desactivar();
})