function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	let base = 15000;
	switch(estacionIngresada) {
		case "Invierno":
		if (txtIdDestino.value == "Bariloche") {
			let precio = base*1.2;
			alert(txtIdDestino.value+" tiene un costo de $"+precio);
		} else if (txtIdDestino.value == "Cordoba" || txtIdDestino.value == "Cataratas") {
			let precio = base*0.9;
			alert(txtIdDestino.value+" tiene un costo de $"+precio);
		} else {
			let precio = base * 0.8;
			alert(txtIdDestino.value+" tiene un costo de $"+precio);
		}
		break;

		case "Verano":
		if (txtIdDestino.value == "Bariloche") {
			let precio = base*0.8;
			alert(txtIdDestino.value+" tiene un costo de $"+precio);
		} else if(txtIdDestino.value == "Cordoba" || txtIdDestino.value == "Cataratas") {
			let precio = base*1.1;
			alert(txtIdDestino.value+" tiene un costo de $"+precio);
		} else {
			let precio = base * 1.2;
			alert(txtIdDestino.value+" tiene un costo de $"+precio);
		}
		break;

		case "Otoño":
		case "Primavera":
		if (txtIdDestino.value == "Bariloche" || txtIdDestino.value == "Mar del plata" || txtIdDestino.value == "Cataratas") {
			let precio = base *1.1;
			alert(txtIdDestino.value+" tiene un costo de $"+precio);
		} else {
			let precio = base;
			alert(txtIdDestino.value+" tiene un costo de $"+precio);
		}
		break;
	}
}//FIN DE LA FUNCIÓN