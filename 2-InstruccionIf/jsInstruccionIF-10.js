function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numeroRandom;

	numeroRandom = Math.ceil(Math.random()*10);

	if (numeroRandom == 9 || numeroRandom == 10) {
		alert(numeroRandom + ": EXCELENTE");
	} else if(numeroRandom >= 4 && numeroRandom < 9) {
		alert(numeroRandom + ": APROBÓ");
	} else {
		alert(numeroRandom + ": Vamos, la proxima se puede");
	}
}//FIN DE LA FUNCIÓN