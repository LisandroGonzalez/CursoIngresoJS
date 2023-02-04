/*
Lisandro Gonzalez (entrega 2)
1.	Para el departamento de facturación:
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
    var mensaje;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;
    mensaje = "La suma de los precios es: ";

    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    suma = precio1 + precio2 + precio3;
    mensaje += suma;
    
    alert(mensaje);
}
function Promedio () 
{
    var precio1;
    var precio2;
    var precio3;
    var totalPrecios;
    var promedio;
    var mensaje;
    var  suma;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);
    totalPrecios = 3;
    suma = precio1 + precio2 + precio3;
    mensaje = "El promedio es de: ";

    promedio = suma / totalPrecios;
    mensaje += promedio;
    
    alert(mensaje);
}
function PrecioFinal () 
{
    var precio1;
    var precio2;
    var precio3;
    var precioFinal;
    var descuento;
    var iva;
    var mensaje;
    var suma;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;
    iva = 21;
    mensaje = "El precio final es de: ";
    
    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    suma = precio1 + precio2 + precio3;

    descuento = suma * iva / 100;
    precioFinal = suma + descuento;

    mensaje += precioFinal;
    
    alert(mensaje);
}