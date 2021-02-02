/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	let sexo;

	while(sexoIngresado != "f" && sexoIngresado != "m") {
		sexoIngresado = prompt("Ingrese su sexo: \n f : femenino \n m : masculino");
		if (sexoIngresado == "f") {
			sexo = "Femenino";
		} else if (sexoIngresado == "m") {
			sexo = "Masculino";
		}
	}
	txtIdSexo.value = sexo;

}//FIN DE LA FUNCIÓN