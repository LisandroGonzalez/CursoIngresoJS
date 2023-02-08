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
	var mensaje;

	edad = document.getElementById("txtIdEdad").value;
	rangoMenor = 13;
	rangoMayor = 17;

	edad = parseInt(edad);
	
	if(edad >= rangoMenor /*&& edad <= rangoMayor*/){
		if(edad <= rangoMayor){
			mensaje = "es adolescente.";
		}
		alert(mensaje);
	}

}//FIN DE LA FUNCIÓN