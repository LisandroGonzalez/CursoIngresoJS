/*
Lisandro Gonzalez
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive.
*/
function mostrar()
{
	var numero;
	var rangoMenor;
	var rangoMayor;

	rangoMenor = 1;
	rangoMayor = 10;

	numero = Math.random() * (rangoMayor - rangoMenor) + rangoMenor;
	//Genero el número RANDOM entre 1 y 10 
	alert(numero);

}//FIN DE LA FUNCIÓN