/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let num1 = parseInt(txtIdNumeroDividendo.value);
	let num2 = parseInt(txtIdNumeroDivisor.value);
	let resultado = num1/num2;
	let resto = num1 % num2;
	alert("El resto es: "+resto);
}
