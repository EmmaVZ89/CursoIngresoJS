function mostrar()
{
	//tomo la edad
	let edad;
	let estado;

	edad = txtIdEdad.value;
	edad = parseInt(txtIdEdad.value);
	estado = estadoCivil.value;

	if (edad >= 18 && estado == "Soltero") {
		alert("Es soltero y no es menor.");
	}
		 
}//FIN DE LA FUNCIÓN