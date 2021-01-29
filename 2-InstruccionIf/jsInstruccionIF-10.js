function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numRandom = Math.ceil(Math.random()*10);
	if (numRandom == 9 || numRandom == 10) {
		alert("EXCELENTE");
	} else if(numRandom >= 4 && numRandom < 9) {
		alert("APROBÓ");
	} else {
		alert("Vamos, la proxima se puede");
	}
}//FIN DE LA FUNCIÓN