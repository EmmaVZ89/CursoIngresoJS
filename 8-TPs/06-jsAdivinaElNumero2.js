/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
var numeroIngresado;

function comenzar()
{
	alert("Comienza el juego!!. Elige un número entre 1 y 100.")
	contadorIntentos = 0;
	numeroSecreto = Math.floor(Math.random() * 100) + 1;
	
}

function verificar()
{

	numeroIngresado = txtIdNumero.value;
	numeroIngresado = parseInt(numeroIngresado);
	
	contadorIntentos++;
	txtIdIntentos.value = contadorIntentos;

	if(numeroSecreto == numeroIngresado)
	{
		switch(contadorIntentos)
		{
			case 1:
			alert("Felicitaciones!! usted gano en " + contadorIntentos + " intentos, " + "Usted es un Psíquico");
			break;

			case 2:
			alert("Felicitaciones!! usted gano en " + contadorIntentos + " intentos, " + "Excelente percepción");
			break;

			case 3:
			alert("Felicitaciones!! usted gano en " + contadorIntentos + " intentos, " + "Esto es suerte");
			break;

			case 4:
			alert("Felicitaciones!! usted gano en " + contadorIntentos + " intentos, " + "Excelente técnica");
			break;

			case 5:
			alert("Felicitaciones!! usted gano en " + contadorIntentos + " intentos, " + "Usted está en la media");
			break;

			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			alert("Felicitaciones!! usted gano en " + contadorIntentos + " intentos, " + "Falta técnica");
			break;

			default:
			alert("Felicitaciones!! usted gano en " + contadorIntentos + " intentos, " + "Afortunado en el amor!!");
			break;
		}
	}
	else
	{
		if(numeroSecreto > numeroIngresado)
		{
			alert("Ingresa un numero mas grande");
		}
		else
		{
			alert("Ingresa un numero mas pequeño");
		}
	}
}