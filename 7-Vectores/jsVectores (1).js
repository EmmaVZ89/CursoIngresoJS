function mostrar()
{

	let arrayNumeros;

	arrayNumeros = [];

	arrayNumeros[0] = 12;
	arrayNumeros[1] = 24;
	arrayNumeros[2] = 34;
	arrayNumeros[3] = 32;
	arrayNumeros[4] = 22;
	arrayNumeros[5] = 1;
	arrayNumeros[6] = 87;
	arrayNumeros[7] = 11;
	arrayNumeros[8] = 0;
	arrayNumeros[9] = 15;

	document.write("Los numeros en el array son los siguientes: <br>");

	for(let i = 0; i < 10; i++) {
		document.write("La posición " + i + " tiene el número " + arrayNumeros[i] + "<br>");
	}




}//FIN DE LA FUNCIÓN