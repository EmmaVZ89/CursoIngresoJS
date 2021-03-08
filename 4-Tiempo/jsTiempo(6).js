var miTemporizador ;
var contador=0;

function inicio()
{
	document.getElementById("secreto").style.visibility = "hidden";
	alert("Inicio de la función");
	miTemporizador = setTimeout(SegundosEnElAire, 3000);
	
}//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() {
	document.getElementById("secreto").style.visibility = "visible";
	alert("Bienvenidos a la UTN FRA");
   
}//FIN DE LA FUNCIÓN SegundosEnElAire

function fin()
{

}//FIN DE LA FUNCIÓN fin

//secreto