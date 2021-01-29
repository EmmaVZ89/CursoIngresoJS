function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	switch(estacionIngresada) {
		case "Invierno":
		if (txtIdDestino.value == "Bariloche") {
			alert("Se viaja.");
		} else {
			alert("No se viaja.");
		}
		break;

		case "Verano":
		if (txtIdDestino.value == "Mar del plata" || txtIdDestino.value == "Cataratas") {
			alert("Se viaja.");
		} else {
			alert("No se viaja.");
		}
		break;

		case "Otoño":
		alert("Se viaja.");
		break;

		case "Primavera":
		if (txtIdDestino.value == "Bariloche") {
			alert("Se viaja.");
		} else {
			alert("No se viaja.");
		}
		break;
	}

}//FIN DE LA FUNCIÓN