/*
Lisandro Gonzalez
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje
 concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaF;
    var celcius;

    temperaturaF = document.getElementById("txtIdTemperatura").value;

    temperaturaF = parseFloat(temperaturaF);

    celcius = (temperaturaF - 32) / 1.8; // Calculo para pasar de Fahrenheit a centígrados

    alert(temperaturaF + " Fahrenheit son " + celcius + " centígrados");
}

function CentigradosFahrenheit () 
{
	var temperaturaC;
    var fahrenheit;

    temperaturaC = document.getElementById("txtIdTemperatura").value;

    temperaturaC = parseFloat(temperaturaC);

    fahrenheit = (9/5 * temperaturaC) + 32; // Calculo para pasar de centígrados a Fahrenheit

    alert(temperaturaC + " centígrados son " + fahrenheit + " Fahrenheit");
}
