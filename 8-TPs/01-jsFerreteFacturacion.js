/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
    var precio2;
    var precio3;
    var suma;

    precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    suma = precio1 + precio2 + precio3;
    
    alert("La suma de los precios es: " + suma);
}
function Promedio () 
{
    var precio1;
    var precio2;
    var precio3;
    var promedio;

    precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    promedio = (precio1 + precio2 + precio3) / 3;
    
    alert("El promedio es de: " + promedio);
}
function PrecioFinal () 
{
    var precio1;
    var precio2;
    var precio3;
    var precioFinal;
    var iva;

    precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    iva = (precio1 + precio2 + precio3) * 0.21;

    precioFinal = precio1 + precio2 + precio3 + iva;
    
    alert("El precio final es de: " + precioFinal);
}