function mostrar()
{
	//tomo la edad 
	let edad;

	edad = txtIdEdad.value;
	edad = parseInt(txtIdEdad.value);

	if(edad < 13 || edad > 17) {
		alert("La persona NO es adolescente.")
	}
	
}//FIN DE LA FUNCIÓN