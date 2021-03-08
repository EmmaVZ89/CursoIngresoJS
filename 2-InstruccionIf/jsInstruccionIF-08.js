function mostrar()
{
	//tomo la edad
	let edad;
	let estado;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	estado = estadoCivil.value;

	if (edad > 17 && estado == "Soltero") {
		alert("Es soltero y no es menor.");
	}
		 
}//FIN DE LA FUNCIÓN

// Zelarayan Emmanuel Victor