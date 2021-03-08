function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let nota;
	let mensaje;

	nota = Math.floor(Math.random()*10) + 1;

	if (nota > 8) {
		mensaje = nota + ": EXCELENTE";
	} else {
		if(nota > 3) {
		mensaje = nota + ": APROBÓ";
		} else {
		mensaje = nota + ": Vamos, la proxima se puede";
		}
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN