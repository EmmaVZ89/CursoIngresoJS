/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let numeroIngresado;

	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = 'si';

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero:");
		numeroIngresado = parseInt(numeroIngresado);
		
		if (numeroIngresado >= 0)
		{
			sumaPositivos += numeroIngresado;
		}
		else
		{
			multiplicacionNegativos *= numeroIngresado;
		}

		respuesta = prompt("Continuar?, si o no.");
		
	}

	txtIdSuma.value = sumaPositivos;
	txtIdProducto.value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN