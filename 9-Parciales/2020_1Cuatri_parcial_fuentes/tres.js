// Enunciado:
// Bienvenidos.
// En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y
// estado civil("soltero", "casado" o "viudo")y temperatura corporal.
// a) El nombre de la persona con mas temperatura.
// b) Cuantos mayores de edad estan viudos
// c) La cantidad de hombres que hay solteros o viudos.
// d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
// e) El promedio de edad entre los hombres solteros.
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let continuar;
	let banderaTemperaturaMaxima;
	let temperaturaMaxima;
	let personaConMasTemperatura;
	let cantidadViudos;
	let hombresViudos;
	let hombresSolteros;
	let hombresSolterosYViudos;
	let temperaturaTerceraEdad;
	let edadHombresSolteros;
	let promedioHombresSolteros;

	continuar = true;
	banderaTemperaturaMaxima = true;
	cantidadViudos = 0;
	hombresSolteros = 0;
	hombresViudos = 0;
	hombresSolterosYViudos = 0;
	temperaturaTerceraEdad = 0;
	edadHombresSolteros = 0;

	while (continuar)
	{
		nombre = prompt("Ingrese nombre");
		nombre = nombre.toLowerCase();

		edad = prompt("Ingrese edad");
		edad = parseInt(edad);

		sexo = prompt("Ingrese sexo, f o m");
		sexo = sexo.toLowerCase();
		while (sexo != "f" && sexo != "m")
		{
			sexo = prompt("ERROR: Ingrese sexo, f o m");
			sexo = sexo.toLowerCase();
		}

		estadoCivil = prompt("Ingrese estado civil");
		estadoCivil = estadoCivil.toLowerCase();
		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("ERROR: Ingrese estado civil, debe ser soltero, casado o viudo.");
			estadoCivil = estadoCivil.toLowerCase();
		}

		temperaturaCorporal = prompt("Ingrese temperatura corporal");
		temperaturaCorporal = parseInt(temperaturaCorporal);

		if (banderaTemperaturaMaxima || temperaturaCorporal > temperaturaMaxima)
		{
			temperaturaMaxima = temperaturaCorporal;
			personaConMasTemperatura = nombre;
			banderaTemperaturaMaxima = false;
		}

		if (edad > 17)
		{
			if (estadoCivil == "viudo")
			{
				cantidadViudos++;
			}

			if (sexo == "m")
			{
				if (estadoCivil == "viudo")
				{	
					hombresViudos++;
				}
				else
				{
					if (estadoCivil == "soltero")
					{
						hombresSolteros++;
						edadHombresSolteros += edad;
					}
				}
			}
		}

		if (edad > 60 && temperaturaCorporal > 38)
		{
			temperaturaTerceraEdad++;
		}

		continuar = confirm("Desea Confituar?");
	}

	hombresSolterosYViudos = hombresSolteros + hombresViudos;
	promedioHombresSolteros = edadHombresSolteros / hombresSolteros;

	document.write("Persona con mas temperatura: " + personaConMasTemperatura + "<br>");
	document.write("Cantidad de mayores de edad viudos: " + cantidadViudos + "<br>");
	document.write("Cantidad de hombres solteros o viudos: " + hombresSolterosYViudos + "<br>");
	document.write("Cantidad de mayores de 60 años con mas de 38°C: " + temperaturaTerceraEdad + "<br>");
	document.write("Promedio de edad de hombres solteros: " + promedioHombresSolteros);
}
 

 //Zelarayan Emmanuel Victor