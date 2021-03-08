// Bienvenidos.
// Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y
// un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al 
// terminar el ingreso por document.write:
// a) La cantidad de números pares.
// b) La cantidad de números impares.
// c) La cantidad de ceros.
// d) El promedio de todos los números positivos ingresados.
// e) La suma de todos los números negativos.
// f) El número y la letra del máximo y el mínimo.
function mostrar()
{
	let letra;
	let numero;
	let continuar;
	let cantidadPares;
	let cantidadImpares;
	let cantidadCeros;
	let sumaPositivos;
	let sumaNegativos;
	let cantidadPositivos;
	let promedioPositivos;

	let numeroMaximo;
	let numeroMinimo;
	let letraNumeroMaximo;
	let letraNumeroMinimo;
	let banderaNumeroMaximo;
	let banderaNumeroMinimo;

	banderaNumeroMaximo = true;
	banderaNumeroMinimo = true;
	continuar = true;
	cantidadPares = 0;
	cantidadImpares = 0;
	cantidadCeros = 0;
	sumaPositivos = 0;
	sumaNegativos = 0;
	cantidadPositivos = 0;

	while (continuar)
	{
		letra = prompt("Ingrese una letra");
		letra = letra.toLowerCase();

		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		while (numero < -100 || numero > 100)
		{
			numero = prompt("ERROR: Ingrese un numero, deber estar entre -100 y 100.");
			numero = parseInt(numero);
		}

		if (numero % 2 == 0)
		{
			cantidadPares++;
		}
		else
		{
			cantidadImpares++;
		}


		if (numero > 0)
		{
			sumaPositivos += numero;
			cantidadPositivos++;
		}
		else
		{
			if (numero < 0)
			{
				sumaNegativos += numero;
			}
			else 
			{
				cantidadCeros++;
			}
		}

		if (banderaNumeroMaximo || numero > numeroMaximo)
		{
			numeroMaximo = numero;
			letraNumeroMaximo = letra;
			banderaNumeroMaximo = false;
		}

		if (banderaNumeroMinimo || numero < numeroMinimo)
		{
			numeroMinimo = numero;
			letraNumeroMinimo = letra;
			banderaNumeroMinimo = false;
		}

		continuar = confirm("Desea continuar?");
	}

	promedioPositivos = sumaPositivos / cantidadPositivos;

	document.write("Cantidad de numeros pares: " + cantidadPares + "<br>");
	document.write("Cantidad de numeros impares: " + cantidadImpares + "<br>");
	document.write("Cantidad de numeros cero: " + cantidadCeros + "<br>");
	document.write("Promedio de numero positivos: " + promedioPositivos + "<br>");
	document.write("Suma de numeros negativos: " + sumaNegativos + "<br>");
	document.write("Numero maximo: " + numeroMaximo + " Letra: " + letraNumeroMaximo + "<br>");
	document.write("Numero minimo: " + numeroMinimo + " Letra: " + letraNumeroMinimo + "<br>");
}
