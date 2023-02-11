/*
Lisandro Gonzalez
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 
por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final
en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%
en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%
en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/
function mostrar()
{
	var estacion;
	var destino;
	var ESTADIA_PRECIO;
	var mensaje;
	var aumento;
	var descuento;
	var precio;

	estacion = document.getElementById("txtIdEstacion").value; 
	destino = document.getElementById("txtIdDestino").value;
	ESTADIA_PRECIO = 15000;
	aumento = 0;
	descuento = 0;

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					aumento = 20;
				break;
				case "Cataratas":
				case "Cordoba":
					descuento = 10;
				break;
				case "Mar del plata":
					descuento = 20;
				break;
			}
		break;
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					descuento = 20;
				break;
				case "Cataratas":
				case "Cordoba":
					aumento = 10;
				break;
				case "Mar del plata":
					aumento = 20;
				break;
			}
		break;
		case "Otoño":
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
					aumento = 10;
				break;
				case "Cataratas":
					aumento = 10;
				break;
				case "Mar del plata":
					aumento = 10;
				break;
			}
		break;
	}

	precio = ESTADIA_PRECIO + ESTADIA_PRECIO * aumento / 100 - ESTADIA_PRECIO * descuento / 100;

	mensaje = "El precio final es de: " + precio;

	alert(mensaje);

}//FIN DE LA FUNCIÓN