/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */

function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos;
	let sumaPositivos;
	let positivos;
	let negativos;
	let promedioNegativos;
	let promedioPositivos;
	let ceros;
	let pares;

	respuesta = "si";
	sumaNegativos = 0;
	sumaPositivos = 0;
	positivos = 0;
	negativos = 0;
	promedioPositivos = 0;
	promedioNegativos = 0;
	ceros = 0;
	pares = 0;

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero.");
		numeroIngresado = parseInt(numeroIngresado);

		if (numeroIngresado > 0)
		{
			sumaPositivos += numeroIngresado;
			positivos++;
		}
		else
		{
			if (numeroIngresado < 0)
			{
				sumaNegativos += numeroIngresado;
				negativos++;
			}
			else
			{
				ceros++;
			}
		}
		
		if (numeroIngresado % 2 == 0)
		{
			pares++;
		}

		respuesta = prompt("desea continuar?");
		respuesta = respuesta.toLowerCase();

	}//fin del while

	if (positivos != 0)
	{
		promedioPositivos = sumaPositivos/positivos;
	}
	else
	{
		promedioPositivos = "No se ingresaron numeros positivos";
	}
	
	if (negativos != 0)
	{
		promedioNegativos = sumaNegativos/negativos;
	}
	else
	{
		promedioNegativos = "No se ingresaron numeros negativos";
	}

	document.write("1- la suma de negativos es: " + sumaNegativos);
	document.write("<br>2- la suma de positivos es: " + sumaPositivos);
	document.write("<br>3- la cantidad de positivos es: " + positivos);
	document.write("<br>4- la cantidad de negativos es: " + negativos);
	document.write("<br>5- la cantidad de ceros es: " + ceros);
	document.write("<br>6- la cantidad de numeros pares es: " + pares);
	document.write("<br>7- el promedio de los numeros positivos es: " + promedioPositivos);
	document.write("<br>8- el promedio de los numeros negativos es: " + promedioNegativos);
	document.write("<br>9- la diferencia entre positivos y negativos es: " + (sumaPositivos + sumaNegativos));
	
}//FIN DE LA FUNCIÓN