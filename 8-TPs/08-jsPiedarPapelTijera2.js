var eleccionMaquina;
var ContadorDeEmpates = 0;
var ContadorDeGanadas = 0;
var ContadorDePerdidas = 0;
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
		ContadorDeEmpates++;
		txtIdEmpatadas.value = ContadorDeEmpates;
	}
	else
	{
		if (eleccionMaquina == 2)
		{
			mensaje = "PERDISTE";
			ContadorDePerdidas++;
			txtIdPerdidas.value = ContadorDePerdidas;
		}
		else
		{
			mensaje = "GANASTE";
			ContadorDeGanadas++;
			txtIdGanadas.value = ContadorDeGanadas;
		}
	}

	alert(mensaje);

	eleccionMaquina = Math.floor(Math.random() * 3) + 1;

}//FIN DE LA FUNCIÓN
function papel()
{
	if (eleccionMaquina == 1)
	{
		mensaje = "GANASTE";
		ContadorDeGanadas++;
		txtIdGanadas.value = ContadorDeGanadas;
	}
	else
	{
		if (eleccionMaquina == 2)
		{
			mensaje = "EMPATE";
			ContadorDeEmpates++;
			txtIdEmpatadas.value = ContadorDeEmpates;
		}
		else
		{
			mensaje = "PERDISTE";
			ContadorDePerdidas++;
			txtIdPerdidas.value = ContadorDePerdidas;
		}
	}

	alert(mensaje);

	eleccionMaquina = Math.floor(Math.random() * 3) + 1;

}//FIN DE LA FUNCIÓN
function tijera()
{
	if (eleccionMaquina == 1)
	{
		mensaje = "PERDISTE";
		ContadorDePerdidas++;
		txtIdPerdidas.value = ContadorDePerdidas;
	}
	else
	{
		if (eleccionMaquina == 2)
		{
			mensaje = "GANASTE";
			ContadorDeGanadas++;
			txtIdGanadas.value = ContadorDeGanadas;
		}
		else
		{
			mensaje = "EMPATE";
			ContadorDeEmpates++;
			txtIdEmpatadas.value = ContadorDeEmpates;
		}
	}

	alert(mensaje);

	eleccionMaquina = Math.floor(Math.random() * 3) + 1;

}//FIN DE LA FUNCIÓN

function mostrarResultado()
{

}