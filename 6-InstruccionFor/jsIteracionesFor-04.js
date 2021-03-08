function mostrar()
{
	let i;
	let respuesta;

	for (let i = 0; i < 100; i++)
	{
		alert("Hola");

		respuesta = prompt("Desea hacerlo otra vez? ")

		if (respuesta != "si")
		{
			break;
		}

		alert("Sigo");
	}

}//FIN DE LA FUNCIÓN