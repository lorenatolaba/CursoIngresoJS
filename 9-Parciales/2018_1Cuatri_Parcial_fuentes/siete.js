function mostrar()
{
    var nombre;
    var edad;
    var sexo;
    var cont=0;
    var cant_muj=0;
    var cant_hom=0;
    var cant_may_ed=0;
    var cant_men_ed=0;
    var ca_hombres_may_edad=0;
    var max;
    var min;
    var prom_muj;
    var prom_hom;
    var prom_total;
    var acum_hom=0;
    var acum_muj=0;
    var nombremax;
    var nombremin;
    var sexmax;
    var nombreseñora;

    for(cont=0;cont<4;cont++){

        nombre=prompt("ingrese nombre");
        sexo=prompt("ingrese sexo");

        while(sexo!="f" && sexo!="m"){
            sexo=prompt("vuelva a ingresar sexo valido");
        }
        edad=prompt("ingrese edad");
        edad=parseInt(edad);

        while(edad<0 || edad>100 || isNaN(edad))
        {
            edad=prompt("vuelva a ingresar edad");
            edad=parseInt(edad);
            cont++
        }

        if(sexo == "f"){

            cant_muj ++
            acum_muj=acum_muj + edad;
        }
        else
        {
            cant_hom ++ 
            acum_hom=acum_hom + edad;
            if (edad>18)
            {
                cant_hombres_may_edad++
            }
        }
        if(edad>18){
            cant_may_ed++
        }
        else
        {
            cant_men_ed++
        }
        if(cont==0)
        {
            min=edad;
            max=edad;
        }
        if(edad>max)
        {
            max=edad;
            nombremax=nombre;
            sexmax=sexo;
            if(sexo == "f")
            {
                nombreseñora=nombre;
            }
        }
        if(edad<min)
        {
            min=edad;
            nombremin=nombre;
        }
    }
    prom_muj=acum_muj/cant_muj;
    prom_hom=acum_hom/cant_hom;
    prom_total=(acum_muj+acum_hom)/cont;

    document.write("cantidad de mujeres: " + cant_muj + "<br>");
    document.write("cantidad de hombres: " + cant_hom + "<br>");
    document.write("cantidad de mayores de edad: " + cant_may_ed + "<br>");
    document.write("cantidad de menores de edad: " + cant_men_ed + "<br>");
    document.write("cantidad de menores de edad: " + cant_hombres_may_edad + "<br>");
    document.write("la edad mas baja: "+ min + "<br>");
    document.write("la edad mas alta: "+ max + "<br>");
    document.write("promedio de edad de mujeres: " + prom_muj + "<br>");
    document.write("promedio edad de hombres: "+ prom_hom + "<br>");
    document.write("promedio total: "+ prom_total + "<br>");
    document.write("nombre del mas viejo: "+ nombremax + "<br>");
    document.write("nombre del mas joven: " + nombremin + "<br>");
    document.write("sexo del mas viejo: "+ sexmax + "<br>");
    document.write("nombre de la mujer mas vieja: " + nombreseñora + "<br>"); 



}
