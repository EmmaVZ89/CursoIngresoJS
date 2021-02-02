/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	let clave;

	claveIngresada = prompt("Ingrese la clave");
	clave = "utn750";

	while(claveIngresada != clave) {
	claveIngresada = prompt("Ingrese nuevamente la clave.");
	}	
}//FIN DE LA FUNCIÓN
