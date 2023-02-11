/*
Lisandro Gonzalez
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/
function mostrar()
{
	var mes;
	var mensaje;

	mes = document.getElementById("txtIdMes").value;
	
	switch(mes)
	{
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "El mes tiene 30 dias.";
		break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			mensaje = "El mes tiene 31 dias.";
		break;
		case "Febrero":
			mensaje = "El mes tiene 28 dias.";
		break;
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN