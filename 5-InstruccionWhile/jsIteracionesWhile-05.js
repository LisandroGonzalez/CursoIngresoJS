/*
Lisandro Nuriel
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.
*/
function mostrar()
{
	var sexoIngresado;
	var mensaje;
	var flag;

	flag = false;

	while(!flag)
	{
		sexoIngresado = prompt("ingrese f ó m .");
		if(sexoIngresado === "f" || sexoIngresado === "m")
		{
			flag = true;
		}
	}
	
	if(sexoIngresado === "f")
	{
		mensaje = "femenino";
	}
	else
	{
		mensaje = "masculino";
	}

	document.getElementById("txtIdSexo").value = mensaje;
}//FIN DE LA FUNCIÓN