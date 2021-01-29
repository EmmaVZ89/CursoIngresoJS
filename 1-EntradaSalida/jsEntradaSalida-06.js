/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let num1 = parseInt(txtIdNumeroUno.value);
	let num2 = parseInt(txtIdNumeroDos.value);
	let resultado = num1 + num2;
	alert("El resultado de la suma es: " + resultado); 
}

