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
			if (destino == "Bariloche")
			{
				aumento = base * 0.2;
			}
			else
			{
				if (destino == "Cordoba" || destino == "Cataratas")
				{
					descuento = base * 0.1;
				}
				else
				{
					descuento = base * 0.2;
				}
			}	
		break;

		case "Verano":
			if (destino == "Bariloche")
			{
				descuento = base * 0.2;
			}
			else
			{
				if(destino == "Cordoba" || destino == "Cataratas")
				{
					aumento = base * 0.1;
				}
				else
				{
					aumento = base * 0.2;
				}
			}
		break;

		default:
			if (destino == "Bariloche" || destino == "Mar del plata" || destino == "Cataratas")
			{
				aumento = base * 0.1;
			}
		break;
	}

	if (aumento > 0)
	{
		total = base + aumento;
	}
	else
	{
		if (descuento > 0)
		{
			total = base - descuento;
		}
		else
		{
			total = base;
		}
	}

	alert(destino + " tiene un costo de $" + total);

}//FIN DE LA FUNCIÓN