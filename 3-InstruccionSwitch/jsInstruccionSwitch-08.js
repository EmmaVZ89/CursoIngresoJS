function mostrar()
{
	var destinoIngresado;

	destinoIngresado = txtIdDestino.value;

	switch(destinoIngresado) {
		case "Bariloche":
		alert(destinoIngresado + " hace FRIO");
		break;
		case "Cataratas":
		alert(destinoIngresado + " hace CALOR");
		break;
		case "Mar del plata":
		alert(destinoIngresado + " hace CALOR");
		break;
		case "Ushuaia":
		alert(destinoIngresado + " hace FRIO");
		break;
	}
}//FIN DE LA FUNCIÓN