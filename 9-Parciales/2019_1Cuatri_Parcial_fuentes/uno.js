// Bienvenidos.
// Realizar el algoritmo que pida los datos necesarios para un
//  triángulo equilátero por prompt y que muestre el perímetro por alert.
function mostrar()
{
	let lado;
	let perimetro;

	lado = prompt("Ingrese el lado de un triangulo equilatero")
	lado = parseInt(lado);

	perimetro = lado * 3;

	alert("Perimetro: " + perimetro);
}
