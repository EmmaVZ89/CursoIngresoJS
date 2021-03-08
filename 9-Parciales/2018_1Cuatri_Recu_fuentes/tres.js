function mostrar()
{
 let precio;
 let descuento;
 let precioFinal;

 precio = prompt("Ingrese el precio");
 descuento = prompt("Ingrese el descuento");

 precio = parseInt(precio);
 descuento = parseInt(descuento);

 descuento = (precio * descuento)/100;

 precioFinal = precio - descuento;

 elPrecioFinal.value = precioFinal;
 
}
