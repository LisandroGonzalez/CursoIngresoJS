/*
Lisandro Gonzalez
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
*/
function mostrar()
{
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var datoIngresado;
	var flag;

	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta="ok";
	flag = false;

	while(!flag)
	{
		datoIngresado = prompt("Ingrese un numero.");
		
		if(datoIngresado === respuesta)
		{
			flag = true;
		}
		else
		{
			datoIngresado = parseInt(datoIngresado);
			
			if(datoIngresado > -1)
			{
				sumaPositivos += datoIngresado;
			}
			else
			{
				multiplicacionNegativos *= datoIngresado;
			}
		}
	}

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN