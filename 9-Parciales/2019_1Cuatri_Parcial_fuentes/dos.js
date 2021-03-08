// Bienvenidos.
// A una pareja se le pide los datos para mostrar un mensaje "
 // ustedes se llaman xxxxx y xxxx pesan xx y xx kilos,
//  que sumados son xx kilos y el promedio de peso xx ".
function mostrar()
{
	let personaUno;
	let personaDos;
	let pesoUno;
	let pesoDos;
	let sumaPesos;
	let promedioPesos;

	personaUno = prompt("Ingrese el nombre de la primer persona");
	personaDos = prompt("Ingrese el nombre de la segunda persona");

	pesoUno = prompt("Ingrese peso de la primer persona");
	pesoDos = prompt("Ingrese peso de la segunda persona");

	pesoUno = parseInt(pesoUno);
	pesoDos = parseInt(pesoDos);

	sumaPesos = pesoUno + pesoDos;
	promedioPesos = sumaPesos / 2;

	alert("Ustedes se llaman " + personaUno + " y " + personaDos + " pesan " + pesoUno + " y " + pesoDos + " kilos, que sumados son " + sumaPesos + " kilos y el promedio de peso " + promedioPesos);
}
