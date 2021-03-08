function mostrar()
{

let arrayNumeros;
let suma;

arrayNumeros = [];
suma = 0;

for(let i = 0; i < 5; i++) {
	arrayNumeros[i] = prompt("Ingrese un número:");
	arrayNumeros[i] = parseInt(arrayNumeros[i]);
	suma += arrayNumeros[i];
}

document.write("Los números en el array son: <br>");

for(let j = 0; j < 5; j++) {
	document.write("En la posición " + j + " esta el número " + arrayNumeros[j] + "<br>");
}

document.write("La suma todos los números del array es: " + suma);



}//FIN DE LA FUNCIÓN