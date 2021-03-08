/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var mensaje;

function comenzar()
{
	eleccionMaquina = Math.floor(Math.random() * 3) + 1;
	// alert(numeroRandom);
}//FIN DE LA FUNCIÓN
function piedra()
{
	if (eleccionMaquina == 1)
	{
		mensaje = "EMPATE";
	}
	else
	{
		if (eleccionMaquina == 2)
		{
			mensaje = "PERDISTE";
		}
		else
		{
			mensaje = "GANASTE";
		}
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN
function papel()
{
	if (eleccionMaquina == 1)
	{
		mensaje = "GANASTE";
	}
	else
	{
		if (eleccionMaquina == 2)
		{
			mensaje = "EMPATE";
		}
		else
		{
			mensaje = "PERDISTE";
		}
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN
function tijera()
{
	if (eleccionMaquina == 1)
	{
		mensaje = "PERDISTE";
	}
	else
	{
		if (eleccionMaquina == 2)
		{
			mensaje = "GANASTE";
		}
		else
		{
			mensaje = "EMPATE";
		}
	}

	alert(mensaje);
	
}//FIN DE LA FUNCIÓN