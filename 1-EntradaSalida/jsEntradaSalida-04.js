/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
	let dato = prompt("Ingrese su nombre");
function mostrar()
{
	txtIdNombre.value = dato
	alert(txtIdNombre.value);
}

