
function mostrar()
{
	let largoRectangulo;
	let anchoRectangulo;
	let perimetroRectangulo;

	largoRectangulo = prompt("Ingrese el largo");
	anchoRectangulo = prompt("Ingrese el ancho");

	largoRectangulo = parseInt(largoRectangulo);
	anchoRectangulo = parseInt(anchoRectangulo);

	perimetroRectangulo = (largoRectangulo + anchoRectangulo) * 2;

	alert("El perimetro del rectangulo es: " + perimetroRectangulo);
}
