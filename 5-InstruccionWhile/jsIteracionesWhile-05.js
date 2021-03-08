/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	let sexo;

	sexoIngresado = prompt("Ingrese su sexo: \n f : femenino \n m : masculino");
	sexoIngresado = sexoIngresado.toLowerCase();

	while(sexoIngresado != "f" && sexoIngresado != "m")
	{
		sexoIngresado = prompt("Error! Ingrese su sexo: \n f : femenino \n m : masculino");
	}
	
	txtIdSexo.value = sexoIngresado;

}//FIN DE LA FUNCIÓN