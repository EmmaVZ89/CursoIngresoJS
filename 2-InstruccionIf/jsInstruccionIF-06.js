function mostrar()
{
	//tomo la edad  
	if (txtIdEdad.value >= 18) {
		alert("La persona es mayor de edad.");
	} else if (txtIdEdad.value >= 13 && txtIdEdad.value <= 17) {
		alert("La persona es adolescente.");
	} else {
		alert("La persona es un niño")
	}
}//FIN DE LA FUNCIÓN