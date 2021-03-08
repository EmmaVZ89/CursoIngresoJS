function mostrar()
{

	let repeticiones;
	let i;

	repeticiones = prompt("ingrese el número de repeticiones");
	repeticiones = parseInt(repeticiones);
	
	for(i = 0; i < repeticiones; i++)
	{
		document.write("Hola UTN FRA<br>");
	}
}//FIN DE LA FUNCIÓN