var miTemporizador ;
var contador=0;
var tiempoInicio;
var tiempoFinal;


function inicio()
{
	var random = Math.floor(Math.random()*10000) + 2000;
	alert("Inicio de la función");
	miTemporizador = setTimeout(SegundosEnElAire, random);
	
}//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() {

	document.getElementById("secreto").style.visibility = "visible";
 	tiempoInicio = new Date();
 	tiempoInicio = tiempoInicio.getTime();
   
}//FIN DE LA FUNCIÓN SegundosEnElAire

function ContarMilisegundos()
{
	tiempoFinal = new Date();
	tiempoFinal = tiempoFinal.getTime();
	resultado = tiempoFinal - tiempoInicio;

	if (resultado <= 500) {
		alert("Usted es Flash, resultado: " + resultado);
	} else if(resultado > 500 && resultado <= 1000) {
		alert("Bien ahí, segui practicando, resultado: " + resultado);
	} else if(resultado > 1000 && resultado <= 3000) {
		alert("tenemos los deditos duros???, resultado: " + resultado);
	} else {
		alert("Te quedastes dormido???");
	}

}//FIN DE LA FUNCIÓN fin