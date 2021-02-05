/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let fahrenheit;
	let centigrados;

	fahrenheit = txtIdTemperatura.value;
	fahrenheit = parseInt(fahrenheit);

	centigrados = (5/9) * (fahrenheit - 32);
	centigrados = centigrados.toFixed(2);

	alert(fahrenheit + " Fahrenheit son " + centigrados + " centigrados.");
}

function CentigradosFahrenheit () 
{
	let centigrados;
	let fahrenheit;

	centigrados = txtIdTemperatura.value;
	centigrados = parseInt(centigrados);

	fahrenheit = 9/5 * centigrados + 32;
	fahrenheit = fahrenheit.toFixed(2);

	alert(centigrados + " centigrados son " + fahrenheit + " fahrenheit.");
}

// Zelarayan Emmanuel Victor