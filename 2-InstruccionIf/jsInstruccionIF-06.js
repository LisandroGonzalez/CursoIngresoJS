/*
Lisandro Gonzalez
Al ingresar una edad debemos informar si la persona es mayor 
de edad (mas de 18 años) o adolescente (entre 13 y 17 años) 
o niño (menor a 13 años).
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
	
	if(edad > rangoMayor){
		alert("es mayor.");
	}else if(edad >= rangoMenor){
		alert("es adolescente.");
	}else{
		alert("es un niño.");
	}
}//FIN DE LA FUNCIÓN