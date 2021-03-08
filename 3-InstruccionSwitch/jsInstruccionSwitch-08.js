function mostrar()
{
	var destinoIngresado;

	destinoIngresado = txtIdDestino.value;

	switch(destinoIngresado) {
		case "Bariloche":
		case "Ushuaia":
			alert(destinoIngresado + " hace FRIO");
		break;
		default:
			alert(destinoIngresado + " hace CALOR");
		break;
	}
}//FIN DE LA FUNCIÓN