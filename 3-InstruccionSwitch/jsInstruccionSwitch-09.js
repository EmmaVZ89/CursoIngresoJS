function mostrar()
{
	let estacionIngresada;
	let destino;
	let base;
	let aumento;
	let descuento;
	let total;

	estacionIngresada = txtIdEstacion.value;
	destino = txtIdDestino.value;
	base = 15000;

	switch(estacionIngresada) {
		case "Invierno":
		if (destino == "Bariloche") {
			aumento = base * 0.2;
			total = base + aumento;
			alert(destino + " tiene un costo de $" + total);
		} else if (destino == "Cordoba" || destino == "Cataratas") {
			descuento = base * 0.1;
			total = base - descuento;
			alert(destino + " tiene un costo de $" + total);
		} else {
			descuento = base * 0.2;
			total = base - descuento;
			alert(destino + " tiene un costo de $" + total);
		}
		break;

		case "Verano":
		if (destino == "Bariloche") {
			descuento = base * 0.2;
			total = base - descuento;
			alert(destino + " tiene un costo de $" + total);
		} else if(destino == "Cordoba" || destino == "Cataratas") {
			aumento = base * 0.1;
			total = base + aumento;
			alert(destino + " tiene un costo de $" + total);
		} else {
			aumento = base * 0.2;
			total = base + aumento;
			alert(destino + " tiene un costo de $" + total);
		}
		break;

		case "Otoño":
		case "Primavera":
		if (destino == "Bariloche" || destino == "Mar del plata" || destino == "Cataratas") {
			aumento = base * 0.1;
			total = base + aumento;
			alert(destino + " tiene un costo de $" + total);
		} else {
			total = base;
			alert(destino + " tiene un costo de $" + total);
		}
		break;
	}
}//FIN DE LA FUNCIÓN