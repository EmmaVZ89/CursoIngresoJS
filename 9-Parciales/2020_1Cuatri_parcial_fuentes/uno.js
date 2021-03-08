// Enunciado:

// Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
// de cada una debo obtener los siguientes datos:
// el tipo (validar "barbijo" , "jabón" o "alcohol") ,
// el precio (validar entre 100 y 300),
// la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
// la Marca y el fabricante.
// Se debe Informar al usuario lo siguiente:
// a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
// b) Del tipo con mas unidades, el promedio por compra
// c) Cuántas unidades de jabones hay en total
function mostrar()
{
	let tipoDeProducto;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let contador;
	let alcoholBaratoPrecio;
	let alcoholBaratoUnidades;
	let alcoholBaratoFabricante;
	let cantidadBarbijo;
	let cantidadJabon;
	let cantidadAlcohol;
	let acumuladorBarbijo;
	let acumuladorJabon;
	let acumuladorAlcohol;
	let promedioCompras;

	contador = 0;
	cantidadBarbijo = 0;
	cantidadJabon = 0;
	cantidadAlcohol = 0;
	acumuladorBarbijo = 0;
	acumuladorJabon = 0;
	acumuladorAlcohol = 0;

	while (contador < 5)
	{
		tipoDeProducto = prompt("Ingrese el tipo de producto");
		tipoDeProducto = tipoDeProducto.toLowerCase();
		while (tipoDeProducto != "barbijo" && tipoDeProducto != "jabon" && tipoDeProducto != "alcohol")
		{
			tipoDeProducto = prompt("ERROR: Ingrese el tipo de producto, debe ser barbijo, jabon o alcohol.");
			tipoDeProducto = tipoDeProducto.toLowerCase();
		}

		precio = prompt("Ingrese el precio del producto.");
		precio = parseInt(precio);
		while (precio < 100 || precio > 300)
		{
			precio = prompt("ERROR: Ingrese el precio del producto, el valor debe ser entre 100 y 300.");
			precio = parseInt(precio);
		}

		cantidad = prompt("Ingrese la cantidad del producto");
		cantidad = parseInt(cantidad);
		while (cantidad < 1 || cantidad > 1000)
		{
			cantidad = prompt("ERROR: Ingrese la cantidad del producto, debe ser entre 1 y 1000.");
			cantidad = parseInt(cantidad);
		}

		marca = prompt("Ingrese la marca del producto");
		fabricante = prompt("Ingrese el fabricante del producto");

		if (tipoDeProducto == "alcohol")
		{
			if (cantidadAlcohol == 0 || precio < alcoholBaratoPrecio)
			{
				alcoholBaratoPrecio = precio;
				alcoholBaratoUnidades = cantidad;
				alcoholBaratoFabricante = fabricante;
			}
			cantidadAlcohol++;
			acumuladorAlcohol += cantidad;
		}
		else
		{
			if (tipoDeProducto == "barbijo")
			{
				cantidadBarbijo++;
				acumuladorBarbijo += cantidad;
			}
			else
			{
				cantidadJabon++;
				acumuladorJabon += cantidad;
			}
		}

		contador++;
	}

	if (acumuladorBarbijo > acumuladorJabon && acumuladorBarbijo > acumuladorAlcohol)
		{
			promedioCompras = acumuladorBarbijo / cantidadBarbijo;
		}
		else
		{
			if (acumuladorJabon > acumuladorBarbijo && acumuladorJabon > acumuladorAlcohol)
			{
				promedioCompras = acumuladorJabon / cantidadJabon;
			}
			else
			{
				promedioCompras = acumuladorAlcohol / cantidadAlcohol;
			}
		}

	if (cantidadAlcohol == 0)
	{
		alcoholBaratoPrecio = "Sin compras";
		alcoholBaratoUnidades = "Sin compras";
		alcoholBaratoFabricante = "Sin compras";
	}

	document.write("Precio alcohol mas barato: " + alcoholBaratoPrecio + "<br>-Cantidad: " + alcoholBaratoUnidades + "<br>-Fabricante: " + alcoholBaratoFabricante + "<br>");
	document.write("Promedio de unidades de producto con mas compras: " + promedioCompras + "<br>");
	document.write("Cantidad de jabon: " + acumuladorJabon);

}
 

 // Zelarayan Emmanuel Victor