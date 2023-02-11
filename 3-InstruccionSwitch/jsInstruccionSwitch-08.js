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
			mensaje = "FRIO.";
		break;
		case "Cataratas":
			mensaje = "CALOR";
		break;
		case "Mar del plata":
			mensaje = "CALOR.";
		break;
		case "Ushuaia":
			mensaje = "FRIO.";
		break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN