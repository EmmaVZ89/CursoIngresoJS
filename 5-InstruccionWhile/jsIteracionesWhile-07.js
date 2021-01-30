/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	var acumulador;
	var respuesta;
	acumulador=0;
	respuesta='si';
	contador=0;

	while(respuesta == "si") {
		numeroIngresado = parseInt(prompt("Ingrese un numero:"));
		acumulador += numeroIngresado;
		contador++;
		respuesta = prompt("Continuar?, si o no.");
	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN