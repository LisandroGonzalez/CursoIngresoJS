/*
Lisandro Gonzalez
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es 
del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si 
es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */
function CalcularPrecio () 
{
    var PRECIO_LAMPARA;
    var cantLamparas;
    var marca;
    var descuento;
    var precioFinal;
    var precioSinDesc;
    var precioDescuento;
    var IIBB;

    cantLamparas = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;
    descuento = 0;
    PRECIO_LAMPARA = 35;
    IIBB = 10;

    cantLamparas = parseInt(cantLamparas);

    if(marca === "ArgentinaLuz")
    {
        if(cantLamparas > 5)
        {
            descuento = 50;
        }
        else
        {
            if(cantLamparas == 5)
            {
                descuento = 40;
            }
            else
            {
                if(cantLamparas == 4)
                {
                    descuento = 25;
                }
                else
                {
                    if(cantLamparas == 3)
                    {
                        descuento = 15;
                    }
                }
            }
        }
    }
    else
    {
        if(marca === "FelipeLamparas")
        {
            if(cantLamparas > 5)
            {
                descuento = 50;
            }
            else
            {
                if(cantLamparas == 5)
                {
                    descuento = 30;
                }
                else
                {
                    if(cantLamparas == 4)
                    {
                        descuento = 25;
                    }
                    else
                    {
                        if(cantLamparas == 3)
                        {
                            descuento = 10;
                        }
                    }
                }
            }
        }
        else
        {
            if(cantLamparas > 5)
            {
                descuento = 50;
            }
            else
            {
                if(cantLamparas == 5)
                {
                    descuento = 30;
                }
                else
                {
                    if(cantLamparas == 4)
                    {
                        descuento = 20;
                    }
                    else
                    {
                        if(cantLamparas == 3)
                        {
                            descuento = 5;
                        }
                    }
                }
            }
        }
    }

    /*if(cantLamparas > 5){ // A
        descuento = 50;
    }else{
        if(cantLamparas == 5){ // B
            if(marca === lampArgLuz){
                descuento = 40;
            }else{
                descuento = 30;
            }
        }else{
            if(cantLamparas == 4){ // C
                if(marca === lampArgLuz){
                    descuento = 25;
                }else{
                    if(marca === lampFelipe){
                        descuento = 25;
                    }else{
                        descuento = 20;
                    }
                }
            }else{
                if(cantLamparas == 3){ // D
                    if(marca === lampArgLuz){
                        descuento = 15;
                    }else{
                        if(marca === lampFelipe){
                            descuento = 10;
                        }else{
                            descuento = 5;
                        }
                    }
                }
            }
        }
    }*/

    precioSinDesc = cantLamparas * PRECIO_LAMPARA; // precio sin descuento
    precioDescuento = precioSinDesc * descuento / 100;
    precioFinal = precioSinDesc - precioDescuento; // precio con descuento

    if(precioFinal > 120){ // E
        IIBB *= precioFinal / 100;
        //IIBB.toFixed(2);
        precioFinal += IIBB; // Le agrego al precio con descuento los ingresos brutos.

        alert("IIBB Usted pago: " + IIBB);
    }

    document.getElementById("txtIdprecioDescuento").value = precioFinal;
}