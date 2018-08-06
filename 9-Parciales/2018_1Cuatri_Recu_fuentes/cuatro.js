function mostrar()
{
    var numUno;
    var numDos;
    var suma;
    var division;

    numUno=prompt("ingrese un numero");
    numDos=prompt("ingrese otro numero");
    numUno=parseInt(numUno);
    numDos=parseInt(numDos);
    suma=numUno + numDos;
    division=numUno/numDos;


    if(numUno== numDos){
        alert(numUno+""+numDos);
    } else if (numUno>numDos){
        alert(division);
    }else{ alert("la suma es :"+ suma)

    }
    if (suma <50){
        alert("la suma es: "+ suma + " y es menor a 50." );
    }
    


}
/*Bienvenidos. 
(IF)Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los divido, 
de lo contrario los sumo. 
Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y es menor a 50".*/
