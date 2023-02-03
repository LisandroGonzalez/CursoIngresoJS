/*
Lisandro Gonzalez
9 BIS
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento ingresado por prompt
en el cuadro de texto "RESULTADO".*/
/*function mostrarAumento()
{
	var sueldo = parseInt(document.getElementById("txtIdSueldo").value);
	var inc = sueldo * 0.1;

	document.getElementById("txtIdResultado").value = sueldo + inc;
}*/
function mostrarAumento()
{
	var porcentaje = prompt("Que porcentaje del sueldo quiere aumentar?");
	var sueldo = document.getElementById("txtIdSueldo").value;

	var sueldoNum = parseInt(sueldo);
	var porcNum = parseInt(porcentaje);

	var inc = sueldoNum * porcNum / 100;

	document.getElementById("txtIdResultado").value = sueldoNum + inc;
}