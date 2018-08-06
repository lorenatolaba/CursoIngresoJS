function mostrar()
{
    var notas;
    var edad;
    var sexo;
    var cont=0;
    var acumNotas=0;
    var flag=true;
     
    while(nota<5){
        nota=prompt("ingrese una nota");
        nota=parseInt(nota);
        edad=prompt("ingrese edad:");
        sexo=prompt("ingrese sexo:");
        sexo=sexo.toLowerCase();
        cont++;
    } 

    while(nota<0 || nota>10){
        nota=prompt("ingrese nota nuevamente");
        nota=parseInt(nota);
    }
    acumNotas = acumNotas + notas;
    while (sexo !="f" && sexo != "m"){
        sexo=prompt("ingrese un sexo valido");
        sexo= sexo.toLowerCase();
    }
    if( )


}
/* Bienvenidos. 
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10),la edad y el sexo (validar el sexo “f” o “m”)
 de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones mayores a 18, que su nota haya sido mayor o igual a 6. 
d) El sexo y la nota del más joven 
d) La edad y la nota de la primera mujer ingresada o informar si no hubo ninguna mujer.*/
