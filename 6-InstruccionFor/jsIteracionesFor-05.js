function mostrar()
{
	let numeroIngresado;
	for (let i = 0; i < 1000; i++) {
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		if (numeroIngresado == 9) {
			break;
		}
	}
}//FIN DE LA FUNCIÓN