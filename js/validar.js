const datos = {
    nombre: '',
    email: '',
    mensaje:''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//El evento de submit
formulario.addEventListener('submit', function(e) {
    e.preventDefault(); 

    //Validar el formulario
    const {nombre, email, mensaje} = datos; 

    if(nombre === '' || email === '' || mensaje === '') {
        mostrarError('Todos los campos son obligatorios'); 
        return; 
    }
    //Crear la alerta de enviar correctamente
    mostrarMensaje('Mensaje enviado correctamente');
});

function leerTexto(e) {
    datos[e.target.id] = e.target.value; 
}

//Muestra una alerta de que se envío correctamente
function mostrarMensaje() {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add('correcto'); 

    formulario.appendChild(alerta);

    //Desparezca después de 5 segundos
    setTimeout( () => {
        alerta.remove(); 
    }, 5000); 
} 

//Muestra un error en pantalla
function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error'); 
    
    formulario.appendChild(error);
    
    //Desaparezca después de 5 segundos
    setTimeout( () => {
        error.remove(); 
    }, 5000)
}
