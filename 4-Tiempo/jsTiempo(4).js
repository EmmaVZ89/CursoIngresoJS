var miIntervalo ;
var contador=0;

function inicio()
{
	alert("Inicio de la función");
	miIntervalo = setInterval(SegundosEnElAire, 2000);
	
}//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() {
	contador++;
	alert("Bienvenidos a la UTN FRA, cantidad: " + contador);
	if (contador == 5) {
		alert("Fin de la función");
		clearInterval(miIntervalo);
	}

}//FIN DE LA FUNCIÓN SegundosEnElAire

function fin()
{
	alert("Fin de la función");
	clearInterval(miIntervalo);

}//FIN DE LA FUNCIÓN fin