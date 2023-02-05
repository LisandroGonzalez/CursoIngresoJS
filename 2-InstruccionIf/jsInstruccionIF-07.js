/*
Lisandro Gonzalez
Al ingresar una edad menor a 18 años y un estado civil distinto a 
"Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para 
NO ser soltero.'
*/
function mostrar()
{
	var edad;
	var edadComparacion;
	var estCivil;
	var soltero;

	edad = document.getElementById("txtIdEdad").value;
	estCivil = document.getElementById("estadoCivil").value;
	edadComparacion = 18;
	soltero = "Soltero";

	edad = parseInt(edad);

	if(edad < edadComparacion && estCivil != soltero){
		alert("Es muy pequeño para NO ser soltero.");
	}
}//FIN DE LA FUNCIÓN