/*
Lisandro Gonzalez
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
*/
function mostrar()
{

	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var contador;
	var flag;

	contador = 0;
	flag = false;
	
	while(!flag)
	{
		numeroIngresado = prompt("Ingrese un numero.");
		numeroIngresado = parseInt(numeroIngresado);

		if(contador == 0)
		{
			numeroMinimo = numeroIngresado;
			numeroMaximo = numeroIngresado;
		}
		else
		{
			if(numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
			else
			{
				if(numeroIngresado < numeroMinimo)
				{
					numeroMinimo = numeroIngresado;
				}
			}
		}

		respuesta = prompt("Desea continuar? (Responder 'no' si no quiere continuar).");
		
		if(respuesta.toLowerCase() === "no")
		{
			flag = true;
		}

		contador++;
	}

	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;

}//FIN DE LA FUNCIÓN