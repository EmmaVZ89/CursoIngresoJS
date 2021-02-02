/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let suma;
	let respuesta;
	let promedio;

	suma = 0;
	respuesta = 'si';
	contador = 0;

	while(respuesta == "si") {
		numeroIngresado = prompt("Ingrese un numero:");
		numeroIngresado = parseInt(numeroIngresado);
		suma += numeroIngresado;
		contador++;
		respuesta = prompt("Continuar?, si o no.");
	}

	promedio = suma / contador;

	txtIdSuma.value = suma;
	txtIdPromedio.value = promedio;

}//FIN DE LA FUNCIÓN