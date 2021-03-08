function mostrar()
{

let arrayNombres;

arrayNombres = [];

arrayNombres[0] = "Soledad";
arrayNombres[1] = "Gisele";
arrayNombres[2] = "Emmanuel";
arrayNombres[3] = "Victor";
arrayNombres[4] = "Zelarayan";

document.write("La posición de los nombres es la siguiente: <br>");

for(let i = 0; i < 5; i++) {
	document.write("En la posición " + i + " esta " + arrayNombres[i] + "<br>" );
}



}//FIN DE LA FUNCIÓN