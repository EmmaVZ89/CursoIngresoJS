/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	let sexo = "";
	while(sexoIngresado != "f" && sexoIngresado != "m") {
		sexoIngresado = prompt("ingrese f ó m .");
		if (sexoIngresado == "f") {
			sexo = "Femenino";
		} else if (sexoIngresado == "m") {
			sexo = "Masculino";
		}
	}
	txtIdSexo.value=sexo;
}//FIN DE LA FUNCIÓN