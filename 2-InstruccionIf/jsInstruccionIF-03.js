function mostrar()
{
	//tomo la edad 
	let edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);
	
	if(txtIdEdad.value >= 18) {
		alert("La persona es mayor de edad");
	} else {
		alert("La persona es menor de edad");
	}

}//FIN DE LA FUNCIÓN