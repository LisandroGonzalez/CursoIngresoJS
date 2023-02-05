/*
Lisandro Gonzalez
Al ingresar una edad debemos informar si la persona es adolescente, 
edad entre 13 y 17 años (inclusive) .
*/
function mostrar()
{
	var edad;
	var rangoMenor;
	var rangoMayor;

	edad = document.getElementById("txtIdEdad").value;
	rangoMenor = 13;
	rangoMayor = 17;

	edad = parseInt(edad);
	
	if(edad >= rangoMenor && edad <= rangoMayor){
		alert("es adolescente.");
	}

}//FIN DE LA FUNCIÓN