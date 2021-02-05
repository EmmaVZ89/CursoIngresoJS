/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let dividendo;
	let dividor;
	let resto;
	dividendo = txtIdNumeroDividendo.value;
	dividor = txtIdNumeroDivisor.value;


	dividendo = parseInt(dividendo);
	dividor = parseInt(dividor);
	resto = dividendo % dividor;
	
	alert("El resto es: " + resto);
}
