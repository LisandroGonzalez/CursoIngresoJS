/*
Lisandro Gonzalez
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var nro1;
	var nro2;

	nro1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	nro2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	var suma;
	suma = nro1 + nro2;
	alert("La suma es: " + suma);	
}

function restar()
{
	var nro1;
	var nro2;

	nro1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	nro2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	var resta;
	resta = nro1 - nro2;
	alert("La resta es: " + resta);
}

function multiplicar()
{ 
	var nro1;
	var nro2;

	nro1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	nro2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	var mult;
	mult = nro1 * nro2;
	alert("La multiplicacion es: " + mult);
}

function dividir()
{
	var nro1;
	var nro2;

	nro1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	nro2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	var div;
	div = nro1 / nro2;
	alert("La division es: " + div);
}