function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	switch(mesDelAño) {
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
		alert(mesDelAño+" tiene 31 días.");
		break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
		alert(mesDelAño+" tiene 30 días.");
		break;
		case "Febrero":
		alert(mesDelAño+" tiene 28 días.");
		break;
	}
}//FIN DE LA FUNCIÓN