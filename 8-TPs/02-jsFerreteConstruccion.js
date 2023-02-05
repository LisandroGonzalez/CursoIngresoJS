/*
Lisandro Gonzalez
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las 
medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var hilos;
    var lados;
    var alambre;
    var mensaje;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
    hilos = 3;
    lados = 2;
    mensaje = "La cantidad de alambre a comprar es de: ";

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    alambre = (largo * lados + ancho * lados) * hilos;
    mensaje += alambre;
    
    alert(mensaje);

}
function Circulo () 
{
	var radio;
    var alambre;
    var hilos;
    var mensaje;

    radio = document.getElementById("txtIdRadio").value;
    mensaje = "La cantidad de alambre a comprar es de: "; 
    hilos = 3;

    radio = parseInt(radio);
    alambre = radio * 2 * Math.PI * hilos;

    mensaje += alambre;

    alert(mensaje);

}
function Materiales () 
{
	var largo;
    var ancho;
    var cemento;
    var cal;
    var lados;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
    cemento = 2;
    cal = 3;
    lados = 2;

    largo = parseInt(largo);
    ancho = parseInt(ancho);
    cemento *= (largo + ancho)/lados;
    cal *= (largo + ancho)/lados;

    alert("La cantidad de bolsas de cemento a usar son: " + cemento + ", y de cal: " + cal);
}