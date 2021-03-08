function mostrar()
{
	let numerosPares;
	let numeroIngresado;
	let i;

	numerosPares = 0;
	numeroIngresado = prompt("Ingrese un numero.");
	numeroIngresado = parseInt(numeroIngresado);

	for (i = 1; i <= numeroIngresado; i++)
	{
		if (i % 2 == 0)
		{
			document.write(i + "<br>")
			numerosPares++;
		}
	}

	document.write("Cantidad de numeros pares: " + numerosPares);

}//FIN DE LA FUNCIÓN

//Zelarayan Emmanuel Victor