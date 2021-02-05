/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	let largo;
	let ancho;
	let perimetroRectangulo;
	let cantidadAlambre;

	largo = txtIdLargo.value;
	ancho = txtIdAncho.value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);
	perimetroRectangulo = 2 * (largo + ancho);
	cantidadAlambre = perimetroRectangulo * 3;

	alert("Largo: " + largo + " mts\nAncho: " + ancho + " mts\nPerimetro: " + perimetroRectangulo + " mts\nCantidad de alambre a comprar: " + cantidadAlambre + " mts");
}

function Circulo () 
{
	let radio;
	let perimetroCirculo;
	let cantidadAlambre;

	radio = txtIdRadio.value;
	radio = parseInt(radio);

	perimetroCirculo = 2 * Math.PI * radio;
	perimetroCirculo = perimetroCirculo.toFixed(2);
	cantidadAlambre = perimetroCirculo * 3;
	cantidadAlambre = cantidadAlambre.toFixed(2);

	alert("Radio: " + radio + " mts\nPerimetro: " + perimetroCirculo + " mts\nCantidad de alambre a comprar: " + cantidadAlambre + " mts");
}

function Materiales () 
{
	let largo;
	let ancho;
	let areaRectangulo;
	let bolsaCemento;
	let bolsaCal;

	largo = txtIdLargo.value;
	ancho = txtIdAncho.value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);
	areaRectangulo = largo * ancho;
	bolsaCemento = areaRectangulo * 2;
	bolsaCal = areaRectangulo * 3;

	alert("Largo: " + largo + " mts\nAncho: " + ancho + " mts\nArea: " + areaRectangulo + " mts2\nBolsas de cemento necesarias: " + bolsaCemento + " unidades\nBolsas de Cal necesarias: " + bolsaCal + " unidades");
}

// Zelarayan Emmanuel Victor
