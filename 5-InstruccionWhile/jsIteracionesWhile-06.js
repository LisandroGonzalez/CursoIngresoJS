/*
Lisandro Gonzalez
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=1;
	acumulador=0;

	while(contador < 6)
	{
		numeroIngresado = prompt("Ingrese el " + contador + " numero.");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador += numeroIngresado;

		contador++;
	}
	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/(contador-1);
}//FIN DE LA FUNCIÓN