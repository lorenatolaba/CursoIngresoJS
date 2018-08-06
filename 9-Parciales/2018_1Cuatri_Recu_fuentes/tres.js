function mostrar()
{
    var precio;
    var descuento;
    var iva;
    var precioDesc;
    var precio2;
    var descuento2;


    precio=prompt("ingrese el precio de un producto");
    descuento=prompt("ingrese el descuento");
    precio=parseInt(precio);
    descuento=parseInt(descuento);

    descuento2=(precio * descuento)/100;
    precio2= precio - descuento2;
    iva= (precio*21)/100;
    precioDesc= precio - descuento + iva;

    alert("el descuento es: "+ descuento2 +" el precio con el descuento es: "+ precio2 + " el iva es: "+ iva);
    document.getElementById("elPrecioFinal").value=precioDesc;





    


    

}
