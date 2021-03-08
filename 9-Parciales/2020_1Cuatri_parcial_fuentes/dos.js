// Enunciado:

// Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion,hasta que el cliente quiera:
// Tipo validad("arena";"cal";"cemento")
// Cantidad de bolsas,
// Precio por bolsa (más de cero ),

// Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
// Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
// a) El importe total a pagar , bruto sin descuento y...
// b) el importe total a pagar con descuento(solo si corresponde)
// d) Informar el tipo con mas cantidad de bolsas.
// f) El tipo mas caro
function mostrar()
{	
	let tipo;
	let cantidad;
	let precio;
	let continuar;
	let totalBruto;
	let importeFinal;
	let porcentajeDescuento;
	let descuento;
	let bolsasArena;
	let bolsasCal;
	let bolsasCemento;
	let totalBolsas;
	let tipoConMasCantidad;
	let precioMasAlto;
	let tipoMasCaro;
	let banderaTipoMasCaro;

	continuar = true;
	totalBruto = 0;
	descuento = 0;
	porcentajeDescuento = 0;
	bolsasArena = 0;
	bolsasCal = 0;
	bolsasCemento = 0;
	banderaTipoMasCaro = true;

	while (continuar)
	{
		tipo = prompt("Ingrese el tipo de bolsa");
		tipo = tipo.toLowerCase();
		while (tipo != "arena" && tipo != "cal" && tipo != "cemento")
		{
			tipo = prompt("ERROR: Ingrese el tipo de bolsa, debe ser arena, cal o cemento");
			tipo = tipo.toLowerCase();
		}

		cantidad = prompt("Ingrese la cantidad de bolsas");
		cantidad = parseInt(cantidad);

		precio = prompt("Ingrese el precio por bolsa");
		precio = parseInt(precio);
		while (precio < 1)
		{
			precio = prompt("ERROR: Ingrese el precio por bolsa, debe ser mayor a 0.");
			precio = parseInt(precio);
		}

		if (banderaTipoMasCaro || precio > precioMasAlto)
		{
			tipoMasCaro = tipo;
			precioMasAlto = precio;
			banderaTipoMasCaro = false;
		}

		if (tipo = "arena")
		{
			bolsasArena += cantidad;
		}
		else
		{
			if (tipo = "cal")
			{
				bolsasCal += cantidad;
			}
			else
			{
				bolsasCemento += cantidad;
			}
		}

		totalBruto += precio * cantidad;

		continuar = confirm("Desea continuar?");

	}

	totalBolsas = bolsasArena + bolsasCal + bolsasCemento;

	if (bolsasArena > bolsasCal && bolsasArena > bolsasCemento)
	{
		tipoConMasCantidad = "Arena";
	}
	else
	{
		if (bolsasCal > bolsasArena && bolsasCal > bolsasCemento)
		{
			tipoConMasCantidad = "Cal";
		}
		else
		{
			tipoConMasCantidad = "Cemento";
		}
	}

	if (totalBolsas > 30)
	{
		porcentajeDescuento = 25;
	}
	else
	{
		if (totalBolsas > 10)
		{
			porcentajeDescuento = 15;
		}
	}

	if (porcentajeDescuento != 0)
	{
		descuento = (totalBruto*porcentajeDescuento)/100;
		importeFinal = totalBruto - descuento;
	}
	else
	{
		importeFinal = totalBruto;
	}

	document.write("Total Bruto: " + totalBruto + "<br>");
	document.write("Descuento: " + descuento + "<br>");
	document.write("Importe final: " + importeFinal + "<br>");
	document.write("Tipo con mas cantidad de bolsas: " + tipoConMasCantidad + "<br>");
	document.write("Tipo mas caro: " + tipoMasCaro + "<br>");
	
}

// Zelarayan Emmanuel Victor