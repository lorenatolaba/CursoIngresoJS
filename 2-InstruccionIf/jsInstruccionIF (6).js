function mostrar()
{
//tomo la edad
var edad;

edad=document.getElementById("edad").value;
edad=parseInt(edad);

if( edad >18 ){alert("usted es mayor de edad");
}
 else { if( edad <13 ){ alert("usted es un niño");
} 
else {alert("usted es adolecente");
}



