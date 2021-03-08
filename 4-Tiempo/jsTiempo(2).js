var miIntervalo ;


function inicio()
{
	alert("Inicio de la función");
	miIntervalo = setInterval(SegundosEnElAire, 3000);
	
}//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() {

	alert("Bienvenidos a la UTN FRA");
    
}//FIN DE LA FUNCIÓN SegundosEnElAire

function fin()
{
	alert("Fin de la función")
	clearTimeout(miIntervalo);
}//FIN DE LA FUNCIÓN fin