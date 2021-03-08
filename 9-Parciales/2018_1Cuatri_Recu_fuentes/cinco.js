function mostrar()
{
	let diaDeLaSemana;
	let mensaje;

	diaDeLaSemana = prompt("Ingrese un dia de la semana");
	diaDeLaSemana = diaDeLaSemana.toLowerCase();

	switch(diaDeLaSemana)
	{
		case"lunes":
		case"martes":
		case"miercoles":
		case"jueves":
		case"viernes":
			mensaje = "A trabajar.";
		break;
		case"sabado":
		case"domingo":
			mensaje = "Buen finde";
		break;
		default:
			mensaje = "Dia no valido.";
	}

	alert(mensaje);

}
