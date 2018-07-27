function mostrar()
{

	var contador=0;
	var acumulador=0;
	var num;

	while( contador<5){
		
		num=prompt("ingrese cinco numeros");
		num=parseInt(num);
		contador ++
		acumulador=acumulador + num

	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN