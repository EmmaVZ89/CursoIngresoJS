/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	let contador;
	let arrayNumeros;

	contador = 0;
	arrayNumeros = [];
	respuesta='si';

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero:");
		numeroIngresado = parseInt(numeroIngresado);
		arrayNumeros[contador] = numeroIngresado;
		contador++;
		respuesta = prompt("desea continuar?");
	}
	
	numeroMaximo = Math.max(...arrayNumeros);
	numeroMinimo = Math.min(...arrayNumeros);

	txtIdMaximo.value = numeroMaximo;
	txtIdMinimo.value = numeroMinimo;

}//FIN DE LA FUNCIÓN