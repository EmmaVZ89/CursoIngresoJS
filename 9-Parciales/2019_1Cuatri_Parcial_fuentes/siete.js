// Bienvenidos.
// Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250),
//  el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
// a) El promedio de las alturas totales.
// b) La altura más baja y el sexo de esa persona.
// c) La cantidad de muheres que su altura supere los 190 centimetros.
function mostrar()
{
 	let altura;
 	let sexo;
 	let contador;
 	let alturasTotales;
 	let promedioAlturasTotales;
 	let alturaBaja;
 	let sexoAlturaBaja;
 	let banderaAlturaBaja;
 	let cantidadMujeres;

 	contador = 0;
 	alturasTotales = 0;
 	banderaAlturaBaja = true;
 	cantidadMujeres = 0;

 	while (contador < 5)
 	{
 		altura = prompt("Ingrese la altura en centimetros");
 		altura = parseInt(altura);
 		while (altura < 0 || altura > 250)
 		{
 			altura = prompt("ERROR: Ingrese la altura en centimetros, debe ser entre 0 y 250");
 			altura = parseInt(altura);
 		}
 		alturasTotales += altura;

 		sexo = prompt("Ingrese sexo, f o m");
 		sexo = sexo.toLowerCase();
 		while (sexo != "f" && sexo != "m")
 		{
 			sexo = prompt("Ingrese sexo, f o m");
 			sexo = sexo.toLowerCase();
 		}

 		if (banderaAlturaBaja || altura < alturaBaja)
 		{
 			alturaBaja = altura;
 			sexoAlturaBaja = sexo;
 			banderaAlturaBaja = false;
 		}

 		if (sexo = "f" && altura > 190)
 		{
 			cantidadMujeres++;
 		}


 		contador++;
 	}

 	promedioAlturasTotales = alturasTotales/contador;

 	alert("Promedio de alturas totales "+promedioAlturasTotales);
 	alert("Altura mas baja: " + alturaBaja + " Sexo: " + sexoAlturaBaja);
 	alert("Mujeres con altura mayor a 190 centimetros: " + cantidadMujeres);
}
