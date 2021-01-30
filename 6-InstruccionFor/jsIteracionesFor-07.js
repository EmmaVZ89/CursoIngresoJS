function mostrar()
{
	let divisores = 0;
	let numeroIngresado = parseInt(prompt("Ingrese un numero."));
	for (let i = 1; i <= numeroIngresado; i++) {
		if(numeroIngresado%i==0) {
			alert(i);
			divisores++;
		}
	}
	alert("Cantidad de numeros divisores: "+divisores);

}//FIN DE LA FUNCIÓN