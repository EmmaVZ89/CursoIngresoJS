/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;
	let apellido;
	let edad;

	nombre = txtIdNombre.value;
	apellido = prompt("Por favor ingrese su apellido", "Ejemplo: Rodriguez");
	edad = txtIdEdad.value;
	
	alert("Usted se llama "+nombre+" "+apellido+" y tiene "+edad+" años de edad.");
}

 