/*
Lisandro Gonzalez
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/
function mostrar()
{
	var notaRandom;
	var excelente;
	var aprobo;
	var rangoMenor;
	var rangoMayor;
	var mensaje;

	excelente = 9;
	aprobo = 4;
	rangoMenor = 1;
	rangoMayor = 10;

	notaRandom = Math.random() * (rangoMayor - rangoMenor) + rangoMenor; // Numero random entre rangoMenor(1) y rangoMayor(10).

	notaRandom = parseInt(notaRandom);

	alert("Nota: " + notaRandom); // mensaje para ver la nota.

	if(notaRandom >= excelente){
		mensaje = "EXCELENTE";
	}else if(notaRandom >= aprobo){
		mensaje = "APROBÓ";
	}else{
		mensaje = "Vamos, la proxima se puede.";
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN