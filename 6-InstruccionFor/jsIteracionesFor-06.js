function mostrar()
{
	let numerosPares = 0;
	let numeroIngresado = parseInt(prompt("Ingrese un numero."));
	for (let i = 1; i <= numeroIngresado; i++) {
		if (i%2==0) {
			alert(i)
			numerosPares++;
		}
	}
	alert("Cantidad de numeros pares: "+numerosPares);

}//FIN DE LA FUNCIÓN