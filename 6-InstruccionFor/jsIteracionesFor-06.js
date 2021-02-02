function mostrar()
{
	let numerosPares;
	let numeroIngresado;

	numerosPares = 0;
	numeroIngresado = prompt("Ingrese un numero.");
	numeroIngresado = parseInt(numeroIngresado);

	for (let i = 1; i <= numeroIngresado; i++) {
		if (i % 2 == 0) {
			alert(i)
			numerosPares++;
		}
	}

	alert("Cantidad de numeros pares: " + numerosPares);

}//FIN DE LA FUNCIÓN