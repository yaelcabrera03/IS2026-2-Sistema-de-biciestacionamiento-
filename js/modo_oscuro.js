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
