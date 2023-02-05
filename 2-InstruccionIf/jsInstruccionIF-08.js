/*
Lisandro Gonzalez
Al ingresar una edad menor a 18 años y un estado civil distinto a 
"Soltero", NO HACER NADA, pero si no es asi, y es soltero y no es 
menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
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

	if(edad < edadComparacion){

		if(estCivil != soltero){

		}
	}else if(edad >= edadComparacion){
		
		if(estCivil == soltero){
			alert("Es soltero y no es menor.");
		}
	}
}//FIN DE LA FUNCIÓN