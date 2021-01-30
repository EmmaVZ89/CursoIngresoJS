/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta == "si") {
		numeroIngresado = parseInt(prompt("Ingrese un numero:"));
		if (numeroIngresado >= 0) {
			sumaPositivos += numeroIngresado;
		} else {
			multiplicacionNegativos *= numeroIngresado;
		}
		respuesta = prompt("Continuar?, si o no.");
	}


	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN