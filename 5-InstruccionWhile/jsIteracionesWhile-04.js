/*
Lisandro Gonzalez
al presionar el botón 
pedir un número entre 0 y 9 inclusive.
*/
function mostrar()
{
	var numeroIngresado;

	//numeroIngresado = -1;
	var flag;

	flag = false;

	while(!flag)
	{
		numeroIngresado = prompt("ingrese un número entre 0 y 9.");
		numeroIngresado = parseInt(numeroIngresado);
		if(numeroIngresado > -1 && numeroIngresado < 10)
		{
			flag = true;
		}
	}

	/*while(numeroIngresado < 0 || numeroIngresado > 9)
	{
		numeroIngresado = prompt("ingrese un número entre 0 y 9.");
		numeroIngresado = parseInt(numeroIngresado);
	}*/

	document.getElementById("txtIdNumero").value = numeroIngresado;
	
}//FIN DE LA FUNCIÓN