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
document.getElementById("opcionHeader").addEventListener("click",redirigirPrincipal);
function redirigirPrincipal(){
    const idRol = Number(localStorage.getItem("rol"));
    if(idRol === 3){
        window.location.href="principal_administrador.html";
    }else{
        window.location.href="principal.html";
    }
}

// 1. Seleccionamos los botones del menú
const botonFaqs = document.getElementById('botonFaqs');
const botonContacto = document.getElementById('botonContacto');

// 2. Seleccionamos los contenedores de contenido
const contenedorFaqs = document.getElementById('preguntasFrecuentes');
const contenedorContacto = document.getElementById('formularioQueja');

// 3. Función para activar "Preguntas Frecuentes"
botonFaqs.addEventListener('click', () => {
    // Mostramos el contenedor de FAQs y ocultamos el del Formulario
    contenedorFaqs.classList.add('activo');
    contenedorContacto.classList.remove('activo');
});

// 4. Función para activar "Contáctanos"
botonContacto.addEventListener('click', () => {

    // Mostramos el contenedor del Formulario y ocultamos el de FAQs
    contenedorContacto.classList.add('activo');
    contenedorFaqs.classList.remove('activo');
});