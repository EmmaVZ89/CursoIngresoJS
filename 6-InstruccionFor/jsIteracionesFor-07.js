function mostrar()
{
	let divisores;
	let numeroIngresado;

	divisores = 0;
	numeroIngresado = prompt("Ingrese un numero.");
	numeroIngresado = parseInt(numeroIngresado);

	for (let i = 1; i <= numeroIngresado; i++) {
		if(numeroIngresado % i == 0) {
			alert(i);
			divisores++;
		}
	}
	
	alert("Cantidad de numeros divisores: " + divisores);

}//FIN DE LA FUNCIÓN