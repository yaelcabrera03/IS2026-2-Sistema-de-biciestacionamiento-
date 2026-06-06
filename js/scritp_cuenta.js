document.getElementById("opcionHeader").addEventListener("click",redirigirPrincipal);

function redirigirPrincipal(){
    const idRol = Number(localStorage.getItem("rol"));
    if(idRol === 3){
        window.location.href="principal_administrador.html";
    }else{
        window.location.href="principal.html";
    }
    
}
document.getElementById("datosPersonales").addEventListener("click",redirigirDatos);

function redirigirDatos(){
    window.location.href="datosPersonales.html";
}

