// Bienvenidos (SOLO WITCH).
// una empresa de viajes le solicita ingresar que continente le gustaria visitar
// y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
// Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
// Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
// Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y
 // cualquier otro medio 5% cualquier otro continente tiene un recargo del 20%
function mostrar()
{
	let continente;
	let cantidadDias;
	let precioPorDia;
	let porcentajeDescuento;
	let porcentajeRecargo;
	let metodoDePago;
	let descuento;
	let recargo;
	let totalBruto;
	let importeFinal;

	porcentajeDescuento = 0;
	porcentajeRecargo = 0;
	descuento = 0;
	recargo = 0;
	precioPorDia = 100;
	continente = Marca.value;

	cantidadDias = prompt("Ingresar cantidad de dias");
	cantidadDias = parseInt(cantidadDias);

	metodoDePago = prompt("Ingrese metodo de pago");
	metodoDePago = metodoDePago.toLowerCase();
	while(metodoDePago!="efectivo" && metodoDePago!="mercado pago" && metodoDePago!="debito" && metodoDePago != "otros")
	{
		metodoDePago = prompt("Error: Ingrese metodo de pago, efectivo, mercado pago, debito u otros.");
		metodoDePago = metodoDePago.toLowerCase();
	}

	switch(continente)
	{
		case "América":
			porcentajeDescuento = 50;
			if (metodoDePago == "debito")
			{
				porcentajeDescuento = porcentajeDescuento + 10;
			}
		break;

		case "África":
			porcentajeDescuento = 60;
			if (metodoDePago == "efectivo" || metodoDePago == "mercado pago")
			{
				porcentajeDescuento = porcentajeDescuento + 15;
			}
		break;

		case "Europa":
			porcentajeDescuento = 20;
			if (metodoDePago == "debito")
			{
				porcentajeDescuento = porcentajeDescuento + 15;
			}
			else
			{
				if (metodoDePago == "mercado pago")
				{
					porcentajeDescuento = porcentajeDescuento + 10;
				}
				else
				{
					porcentajeDescuento = porcentajeDescuento + 5;
				}
			}
		break;

		default:
			porcentajeRecargo = 20;
	}

	totalBruto = cantidadDias * precioPorDia;

	if (porcentajeDescuento != 0)
	{
		descuento = (totalBruto * porcentajeDescuento) / 100;
		importeFinal = totalBruto - descuento;
	}
	else
	{
		recargo = (totalBruto * porcentajeRecargo) / 100;
		importeFinal = totalBruto + recargo;
	}

	document.write("Total Bruto: " + totalBruto + "<br>");
	document.write("Descuento: " + descuento + "<br>");
	document.write("Recargo: " + recargo + "<br>");
	document.write("Importe Final: " + importeFinal + "<br>");
}
