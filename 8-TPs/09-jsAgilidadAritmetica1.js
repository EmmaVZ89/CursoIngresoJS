/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
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
	txtIdSegundoNumero.value = segundoNumeroRandom;

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

}//FIN DE LA FUNCIÓN
function Responder()
{
	respuesta = txtIdRespuesta.value;
	
	if (respuesta == resultado) {
		alert("CORRECTO");
	} else {
		alert("INCORRECTO");
	}
	
}//FIN DE LA FUNCIÓN
 