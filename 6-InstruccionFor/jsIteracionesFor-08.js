function mostrar()
{

let numeroIngresado;
let contador;

numeroIngresado = prompt("Ingrese un numero");
numeroIngresado = parseInt(numeroIngresado);
contador = 0;

for (let i = 0; i <= numeroIngresado; i++) {
	if (numeroIngresado % i == 0) {
		contador++;
	}
}
if (contador == 2) {
	alert("ES NUMERO PRIMO");
} else {
	alert("NO ES NUMERO PRIMO");
}

}//FIN DE LA FUNCIÓN