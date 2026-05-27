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