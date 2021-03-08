function mostrar()
{
	 let precio;
	 let descuentoPorcentaje;
	 let importeFinal;

	 precio = prompt("Ingrese precio del producto");
	 precio = parseInt(precio);

	 descuentoPorcentaje = prompt("Ingrese descuento");
	 descuentoPorcentaje = parseInt(descuentoPorcentaje);

	 descuento = (precio * descuentoPorcentaje) / 100;
	 importeFinal = precio - descuento;

	 elPrecioFinal.value = importeFinal;
}
