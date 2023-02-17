/*
Lisandro Gonzalez
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	var numero;

	numero = 1;
	while(numero < 11)
	{
		console.log(numero++);
	}

	/*var nroIngresado;
	var acumulador;
	var mensaje;

	acumulador = 0;

	while(acumulador < 21)
	{
		nroIngresado = prompt("Ingrese un numero positivo menor a 12.");
		nroIngresado = parseInt(nroIngresado);
		
		while(nroIngresado < 1 || nroIngresado > 11)
		{
			nroIngresado = prompt("Por favor, ingrese un numero valido.");
			nroIngresado = parseInt(nroIngresado);
		}
		
		acumulador += nroIngresado;
	}

	mensaje = "Llego al numero: " + acumulador;

	alert(mensaje);*/
}//FIN DE LA FUNCIÓN