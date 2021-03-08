// Realizar el algoritmo que permita ingresar el nombre de un país, cantidad de habitantes
// en millones entre 1 y 7000 (validar)
// la temperaruta mínima que se registra en su territorio(entre -50 y 50) hasta que el usuario
// quiera e informar al terminar el ingreso por document.write:
// a) La cantidad de temperaturas pares.
// b) El nombre del pais con menos habitantes
// c) la cantidad de paises que superan los 40 grados.
// d) el promedio de habitantes entre los paises ingresados
// f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
function mostrar()
{
	let nombrePais;
	let cantidadHabitantes;
	let temperaturaMinima;
	let continuar;
	let cantidadTemperaturasPares;
	let menosHabitantes;
	let nombreMenosHabitantes;
	let banderaMenosHabitantes;
	let temperatura40;
	let totalHabitantes;
	let contadorPaises;
	let promedioHabitantes;
	let temperaturaMinimaRegistrada;
	let paisTemperaturaMinima;

	banderaMenosHabitantes = true;
	continuar = true;
	cantidadTemperaturasPares = 0;
	temperatura40 = 0;
	totalHabitantes = 0;
	contadorPaises = 0;

	while (continuar)
	{
		nombrePais = prompt("Ingrese el nombre del pais");

		cantidadHabitantes = prompt("Ingrese la cantidad de habitantes");
		cantidadHabitantes = parseInt(cantidadHabitantes);
		while (cantidadHabitantes < 1 || cantidadHabitantes > 7000)
		{
			cantidadHabitantes = prompt("ERROR: Ingrese la cantidad de habitantes, debe ser entre 1 y 7000");
			cantidadHabitantes = parseInt(cantidadHabitantes);
		}

		temperaturaMinima = prompt("Ingrese la temperatura minima");
		temperaturaMinima = parseInt(temperaturaMinima);
		while (temperaturaMinima < -50 || temperaturaMinima > 50)
		{
			temperaturaMinima = prompt("ERROR: Ingrese la temperatura minima, debe ser entre -50 y 50.");
			temperaturaMinima = parseInt(temperaturaMinima);
		}

		if (temperaturaMinima % 2 == 0)
		{
			cantidadTemperaturasPares++;
		}

		if(banderaMenosHabitantes || menosHabitantes > cantidadHabitantes)
		{
			menosHabitantes = cantidadHabitantes;
			nombreMenosHabitantes = nombrePais;
			banderaMenosHabitantes = false;
		}

		if (temperaturaMinima > 40)
		{
			temperatura40++;
		}

		if (contadorPaises == 0 || temperaturaMinimaRegistrada > temperaturaMinima)
		{
			temperaturaMinimaRegistrada = temperaturaMinima;
			paisTemperaturaMinima = nombrePais;
		}

		totalHabitantes += cantidadHabitantes;
		contadorPaises++;

		continuar = confirm("Desea continuar?");
	}

	promedioHabitantes = totalHabitantes / contadorPaises;


	document.write("Cantidad temperaturas pares: " + cantidadTemperaturasPares + "<br>");
	document.write("Nombre de pais con menos habitantes: " + nombreMenosHabitantes + "<br>");
 	document.write("Cantidad de paises con mas de 40 grados: " + temperatura40 + "<br>");
 	document.write("Promedio de habitantes en total de paises ingresados: " + promedioHabitantes + "<br>");
 	document.write("Temperatura minima registrada: " + temperaturaMinimaRegistrada + " Pais: " + paisTemperaturaMinima + "<br>");
}
