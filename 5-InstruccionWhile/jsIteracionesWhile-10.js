/*
Lisandro Gonzalez
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos.
*/
function mostrar()
{
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var cantNegativos;
	var cantPositivos;
	var cantCeros;
	var cantPares;
	var promedioPositivos;
	var promedioNegativos;
	var difPosNeg;

	sumaNegativos = 0;
	sumaPositivos = 0;
	cantNegativos = 0;
	cantPositivos = 0;
	cantCeros = 0;
	cantPares = 0;
	promedioNegativos = 0;
	promedioPositivos = 0;
	respuesta = true;
	
	while(respuesta)
	{
		numeroIngresado = prompt("Ingrese un numero.");
		numeroIngresado = parseInt(numeroIngresado);
		if(numeroIngresado > 0)
		{
			sumaPositivos += numeroIngresado;
			cantPositivos++;
		}
		else
		{
			if(numeroIngresado < 0)
			{
				sumaNegativos += numeroIngresado;
				cantNegativos++;
			}
			else
			{
				cantCeros++;
			}
		}
		if(numeroIngresado % 2 == 0)
		{
			cantPares++;
		}

		respuesta = confirm("Desea continuar?");
	}

	promedioPositivos = sumaPositivos / cantPositivos;
	promedioNegativos = sumaNegativos / cantNegativos;
	difPosNeg = sumaPositivos + sumaNegativos;
	
	document.write("<p> " + sumaNegativos + "</p>");
	document.write("<p> " + sumaPositivos + "</p>");
	document.write("<p> " + cantNegativos + "</p>");
	document.write("<p> " + cantPositivos + "</p>");
	document.write("<p> " + cantCeros + "</p>");
	document.write("<p> " + cantPares + "</p>");
	document.write("<p> " + promedioPositivos + "</p>");
	document.write("<p> " + promedioNegativos + "</p>");
	document.write("<p> " + difPosNeg + "</p>");

}//FIN DE LA FUNCIÓN