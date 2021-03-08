/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var temporizador;
var respuesta;
var primerNumeroRandom;
var segundoNumeroRandom;
var operacion;
var operador;
var resultado;

function comenzar()
{

	primerNumeroRandom = Math.floor(Math.random() * 10) + 1;
	segundoNumeroRandom = Math.floor(Math.random() * 10) + 1;
	operacion = Math.floor(Math.random() * 4) + 1;

	txtIdPrimerNumero.value = primerNumeroRandom;
	txtIDSegundoNumero.value = segundoNumeroRandom;

	switch(operacion)
	{
		case 1:
		resultado = primerNumeroRandom + segundoNumeroRandom;
		operador = "+";
		break;

		case 2:
		resultado = primerNumeroRandom - segundoNumeroRandom;
		operador = "-";
		break;

		case 3:
		resultado = primerNumeroRandom * segundoNumeroRandom;
		operador = "*";
		break;

		case 4:
		resultado = primerNumeroRandom / segundoNumeroRandom;
		operador = "/";
		break;
	}

	txtIdOperador.value = operador;

	temporizador = setTimeout(Responder,5000);

}//FIN DE LA FUNCIÓN
function Responder()
{
	respuesta = txtIdRespuesta.value;
	
	if (respuesta == resultado)
	{
		alert("CORRECTO");
	}
	else
	{
		alert("INCORRECTO");
	}

}//FIN DE LA FUNCIÓN
 