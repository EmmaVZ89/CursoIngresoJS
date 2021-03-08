function mostrar()
{

let arrayNumeros;

arrayNumeros = [];

for(let i = 0; i < 5; i++) {
	arrayNumeros[i] = prompt("Ingrese un número:");
}

document.write("Los números en el array son: <br>");

for(let j = 0; j < 5; j++) {
	document.write("En la posición " + j + " esta el número " + arrayNumeros[j] + "<br>");
}


}//FIN DE LA FUNCIÓN