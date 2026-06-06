const campos = [
    {name: 'nombre', label: 'Nombre', type:'text', placeholder:'Ingresa tu nombre'},
    {name: 'correo', label: 'Correo', type: 'email', placeholder:'Ingresa tu correo electronico'},
    {name: 'password', label: 'Contraseña', type: 'password', placeholder:'Ingresa tu contraseña'},
    {name: 'edad', label: 'Edad', type: 'number', placeholder:'Ingresa tu edad'}
]

const contenedor = document.getElementById('contenedorInputs');
campos.forEach((campo) => {
    const label = document.createElement('label');
    label.textContent = campo.label;

    const input = document.createElement('input');
    input.type = campo.type;
    input.name = campo.name;
    input.id = campo.name;
    input.placeholder = campo.placeholder;
    input.classList.add('entradaRegistro');
    
    contenedor.appendChild(label);
    contenedor.appendChild(input);
})

document.getElementById('btnRegistrar').addEventListener('click',async() =>{

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const password = document.getElementById('password').value;
    const edad = document.getElementById('edad').value;

    const{data,error} = await db
        .from('Usuario')
        .insert([{nombre,correo,password,edad,id_rol:1}])
        if(error){
            alert('Ocurrio un error al registrar al usuario');
        }else{
            alert('Usuarion registrado correctamente');
        }
})

document.getElementById("opcionHeader").addEventListener("click",redirigirPrincipal);
function redirigirPrincipal(){
    window.location.href="../index.html";
}