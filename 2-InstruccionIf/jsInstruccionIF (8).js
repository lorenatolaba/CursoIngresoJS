function mostrar()
{
//tomo la edad  
var edad;
var estadoCivil;

edad=document.getElementById("edad").value;
estadoCivil=document.getElementById("estadoCivil").value;

edad=parseInt(edad);

 if(edad <18 && estadoCivil != "soltero" ){ 
  } else {
      if( edad >=18 && estadoCivil == "soltero"){ alert ("es soltero y no es menor");
    } 

	


}//FIN DE LA FUNCIÓN