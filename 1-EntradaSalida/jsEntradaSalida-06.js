/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var nro1;
	var nro2;

	nro1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	nro2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	var suma;
	suma = nro1 + nro2;

	alert(suma);
}

