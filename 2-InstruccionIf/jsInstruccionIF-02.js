/*
Lisandro Gonzalez
Al ingresar una edad debemos informar 
solo si la persona es mayor de edad
*/
function mostrar()
{
	var edad;
	var mayor;

	edad = document.getElementById("txtIdEdad").value;
	mayor = 18;

	edad = parseInt(edad);

	if(edad >= mayor){
		alert("es mayor de edad.");
	}

}//FIN DE LA FUNCIÓN