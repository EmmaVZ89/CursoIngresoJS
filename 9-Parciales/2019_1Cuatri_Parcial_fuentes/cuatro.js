// Pedir dos números y mostrar el resultado:
// Si son iguales los muestro concatenados.
// Si el primero es mayor, los resto,
// de lo contrario los sumo.
// Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
// "la resta es xxx y superó el 10".
function mostrar()
{
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno = prompt("Ingrese el primer numero");
	numeroDos = prompt("Ingrese el segundo numero");

	if (numeroUno == numeroDos)
	{
		resultado = numeroUno + numeroDos;
	}
	else
	{
		numeroUno = parseInt(numeroUno);
		numeroDos = parseInt(numeroDos);

		if (numeroUno > numeroDos)
		{
			resultado = numeroUno - numeroDos;
			if (resultado > 10)
			{
				alert("La resta es " + resultado + " y supero el 10.")
			}
		}
		else
		{
			resultado = numeroUno + numeroDos;
		}
	}

	alert("Resultado: " + resultado);
}
