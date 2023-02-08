/*
Lisandro Gonzalez
Al ingresar una edad solo debemos informar 
si la persona NO es adolescente.
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
	
	if(edad < rangoMenor || edad > rangoMayor){
		mensaje = "no es adolescente.";
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN