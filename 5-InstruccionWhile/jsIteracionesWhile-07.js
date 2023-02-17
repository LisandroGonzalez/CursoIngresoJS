/*
Lisandro Nuriel
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var datoIngresado;
	var flag;


	contador = 1;
	acumulador = 0;
	respuesta = "ok";
	flag = false;

	while(!flag)
	{
		datoIngresado = prompt("Ingrese el " + contador + " numero, para finalizar ingrese 'ok'.");

		if(datoIngresado === respuesta)
		{
			flag = true;
		}
		else
		{
			datoIngresado = parseInt(datoIngresado);
			acumulador += datoIngresado;
			contador++;
		}
	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / (contador - 1);

}//FIN DE LA FUNCIÓN