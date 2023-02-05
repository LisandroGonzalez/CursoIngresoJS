/*
Lisandro Gonzalez
Al ingresar una edad debemos informar si la persona es mayor de edad, 
sino informar que es un menor de edad.
*/
function mostrar()
{
	var edad;
	var mayor;

	edad = document.getElementById("txtIdEdad").value;
	mayor = 18;

	edad = parseInt(edad);
	
	if(edad >= 18){
		alert("es mayor de edad.");
	}else{
		alert("es menor de edad.");
	}
	
}//FIN DE LA FUNCIÓN