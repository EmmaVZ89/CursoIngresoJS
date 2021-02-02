function mostrar()
{
	var destinoIngresado;

	destinoIngresado = txtIdDestino.value;

 	switch(destinoIngresado) {
		case "Bariloche":
		alert(destinoIngresado + " está en el Oeste.");
		break;
		case "Cataratas":
		alert(destinoIngresado + " está en el Este.");
		break;
		case "Mar del plata":
		alert(destinoIngresado + " está en el Este.");
		break;
		case "Ushuaia":
		alert(destinoIngresado + " está en el Sur.");
		break;
	}
}//FIN DE LA FUNCIÓN