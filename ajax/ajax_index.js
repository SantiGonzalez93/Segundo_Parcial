const expresiones = {
	usuario: /^[a-zA-Z0-9.-_]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-Z\s]{1,40}$/, // Letras y espacios, 
	password: /^.{8,16}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,

}

const formulario = document.getElementById('formulario'); 


const inputs = document.querySelectorAll('input');
 

const  validarInputs = (evento) => {
	console.log(evento.target.name)
	switch (evento.target.name) {

		case "usuario":
			validacion(expresiones.usuario, evento.target, 'usuario');
		break;
		case "nombre":
			validacion(expresiones.nombre, evento.target, 'nombre');
		break;
		case "password":
			validacion(expresiones.password, evento.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validacion(expresiones.correo, evento.target, 'correo');
		break;

	 }
}


const validacion = (expresion, input, campo) => {
	if (expresion.test(input.value)) {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos [campo]= true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos [campo]= false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if (inputPassword1.value == inputPassword2.value) {
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos ['password']= true;
	} else {
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos ['password']= false;
	}
}

inputs.forEach((input)=>{
	input.addEventListener('keyup', validarInputs); 
	input.addEventListener('blur', validarInputs); 
})


formulario.addEventListener('submit', (e) => {

	if (campos.usuario && campos.nombre && campos.password && campos.correo ){
		formulario.reset();
	} else {
		document.querySelectorAll('input').classList.add(formulario__grupo-incorrecto);
	}

}) 