/*
Lisandro Gonzalez
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/
function mostrar()
{
	var destino;
	var mensaje;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje = "FRIO.";
		break;
		case "Cataratas":
		case "Mar del plata":
			mensaje = "CALOR.";
		break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN