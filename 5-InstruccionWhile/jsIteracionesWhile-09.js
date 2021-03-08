// 9 BIS: Ingresar 10 números distintos de cero. Determinar de los
//  pares el menor y de los negativos el mayor. 

function mostrar()
{	
	let numeroIngresado;
	let contador;
	let banderaDePrimerNumeroPar;
	let banderaDeNumeroNegativo;
	let parMenor;
	let negativoMayor;

	contador = 0;
	banderaDePrimerNumeroPar = "Primer numero par";
	banderaDeNumeroNegativo = "Primer numero negativo";


	while(contador < 10)
	{
		numeroIngresado = prompt("Ingrese un numero:");
		numeroIngresado = parseInt(numeroIngresado);

		while(numeroIngresado == 0 || isNaN(numeroIngresado))
		{
			numeroIngresado = prompt("ERROR: Ingrese un numero distinto de cero, NO ingresar letras.");
			numeroIngresado = parseInt(numeroIngresado);
		}

		if (numeroIngresado % 2 == 0)
		{
			if (parMenor > numeroIngresado || banderaDePrimerNumeroPar == "Primer numero par" )
			{
				parMenor = numeroIngresado;
				banderaDePrimerNumeroPar = "No es el primer numero par";
			}
		}

		if (numeroIngresado < 0)
		{
			if (negativoMayor < numeroIngresado || banderaDeNumeroNegativo == "Primer numero negativo")
			{
				negativoMayor = numeroIngresado;
				banderaDeNumeroNegativo = "No es el primer numero negativo";
			}
		}

		// if ((banderaDePrimerNumeroPar == "Primer numero par" && numeroIngresado % 2 == 0) || (numeroIngresado % 2 == 0 && parMenor > numeroIngresado))
		// {
		// 	parMenor = numeroIngresado;
		// 	banderaDePrimerNumeroPar = "No es el primer numero par";
		// }

		// if ((banderaDeNumeroNegativo == "Primer numero negativo" && numeroIngresado < 0) || (numeroIngresado < 0 && negativoMayor < numeroIngresado))
		// {
		// 	negativoMayor = numeroIngresado;
		// 	banderaDeNumeroNegativo = "No es el primer numero negativo";
		// }

	contador++;

	}
	
	txtIdMaximo.value = negativoMayor;
	txtIdMinimo.value = parMenor;

}//FIN DE LA FUNCIÓN

// Zelarayan Emmanuel Victor