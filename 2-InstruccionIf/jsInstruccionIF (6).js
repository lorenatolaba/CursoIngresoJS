function mostrar()
{
//tomo la edad  
var edad
var msg

edad=document.getElementById("edad").value;

if(edad > 17) { msg=("es adulto");
}else {
    if (edad < 13 ){ msg=("es niño");
    }else  {
        msg=("es adolecente");

    alert(msg)};
}





}//FIN DE LA FUNCIÓN