function mostrar()
{
	let contador;
	let suma;
	let numeroIngresado;
	let promedio;

	contador = 0;
	suma = 0;

	do
	{
		numeroIngresado = prompt("Ingrese un numero:");
		numeroIngresado = parseInt(numeroIngresado);
		
		suma += numeroIngresado;
		contador++;
	}while(contador < 5);
	
	promedio = suma / contador;

	txtIdSuma.value = suma;
	txtIdPromedio.value = promedio;

}//FIN DE LA FUNCIÓN