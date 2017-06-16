/*aquí va tu código*/

function tomarDatos(){
	 // Paso 1. llamo el botón y le doy la función

	 var boton = document.getElementById("botonGuardar");

	 botonGuardar.addEventListener("click" , guardar);
	 imprimirdatos();
}
 tomarDatos();

function guardar(){
	var nombre = document.getElementById("nombre").value;
	var comentario = document.getElementById("comentario").value;

	localStorage.setItem(nombre,comentario);
	imprimirdatos();
}

function imprimirdatos(){
	var contenedor = document.getElementById("contenedor-comentarios");
	contenedor.innerHTML = " ";
	for(var i = 0; i < localStorage.length; i++){
		var nombre = localStorage.key(i);
		var valor = localStorage.getItem(nombre);

		var div = document.getElementById("div");
		div.setAttribute("id", "comentario-div");

		var comentario = document.createElement("h3");
		comentario.classList.add("titulo");
		var comentarioP = document.createElement("p");
		comentarioP.classList.add("comentario");

		var nombreusr = document.createTextNode("#"+ (i+1) + " " + nombre + ":");
		var comentariousr = document.createTextNode(valor);

		comentario.appendChild(nombreusr);
		comentarioP.appendChild(comentariousr);
		div.appendChild(comentario);
		div.appendChild(comentarioP);

		contenedor.appendChild(div);
	}
}

var botonLimpiar = document.getElementById("botonLimpiar");
botonLimpiar.addEventListener("click", limpiar);

function limpiar(){
	var div = document.getElementById("contenedor-comentarios");
	div.innerHTML = " ";
}
function limpiarDatos(){
	localStorage.clear();
	mostrarDatos();
}	


