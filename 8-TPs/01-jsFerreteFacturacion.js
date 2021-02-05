/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let suma;

	precioUno = txtIdPrecioUno.value;
	precioDos = txtIdPrecioDos.value;
	precioTres = txtIdPrecioTres.value;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);
	suma = precioUno + precioDos + precioTres;
	
	alert("Producto Uno: $ "+ precioUno + "\nProducto Dos: $ " + precioDos + "\nProducto Tres: $ " + precioTres + "\nLa suma de los productos es: $ " + suma);
}

function Promedio () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let suma;
	let promedio;

	precioUno = txtIdPrecioUno.value;
	precioDos = txtIdPrecioDos.value;
	precioTres = txtIdPrecioTres.value;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);
	suma = precioUno + precioDos + precioTres;
	promedio = suma / 3;
	promedio = promedio.toFixed(2);

	alert("Producto Uno: $ " + precioUno + "\nProducto Dos: $ " + precioDos + "\nProducto Tres: $ " + precioTres + "\nEl promedio de los productos es: $ " + promedio);
}

function PrecioFinal () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let suma;
	let iva;
	let precioFinal;

	precioUno = txtIdPrecioUno.value;
	precioDos = txtIdPrecioDos.value;
	precioTres = txtIdPrecioTres.value;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);
	suma = precioUno + precioDos + precioTres;
	iva = suma * 0.21;
	iva = iva.toFixed(2);
	precioFinal = suma + iva;

	alert("Producto Uno: $ " + precioUno + "\nProducto Dos: $ " + precioDos + "\nProducto Tres: $ " + precioTres + "\nIVA(21%): $ " + iva + "\nEl precio final es: $ " + precioFinal);
}

// Zelarayan Emmanuel Victor