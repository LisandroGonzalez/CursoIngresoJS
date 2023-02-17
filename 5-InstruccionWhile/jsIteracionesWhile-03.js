/*
Lisandro Gonzalez
al presionar el botón pedir la CLAVE (ayuda: es utn750)
SOLO 3 INTENTOS
*/
function mostrar()
{
	var clave;
	var claveIngresada;
	var i;
	var mensaje;

	clave = "utn750";
	i = 1;

	claveIngresada = prompt("Ingrese la clave, tiene hasta tres intentos.");

	while(claveIngresada != clave && i < 3)
	{
		claveIngresada = prompt("Clave erronea, ese fue su " + i + " intento, ingrese la contaseña denuevo.");
		i++;
	}

	if(claveIngresada !== clave)
	{
		mensaje = "Acceso denegado.";
	}else
	{
		mensaje = "Acceso permitido.";
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN
