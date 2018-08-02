function mostrar()
{
    var num;
    var contdiv=0;
    num=prompt("ingrese numero");

    for(var i = 1 ; i<=num; i++){
        if ( num% i == 0){
            contdiv ++;
            console.log(i);
        }
    }
if(contdiv!=2){}



}//FIN DE LA FUNCIÓN