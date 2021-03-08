function mostrar()
{
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno = prompt("Ingrese un numero");
	numeroDos = prompt("Ingrese otro numero");

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
			resultado = numeroUno / numeroDos;
		}
		else
		{
			resultado = numeroUno + numeroDos;
			if (resultado < 50)
			{
				alert("La suma es " + resultado + " y es menor a 50.");
			}
		}
	}

	alert("El resultado es: " + resultado);

}
