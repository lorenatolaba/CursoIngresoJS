function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero=0;

	while(respuesta == "si"){
		contador ++;
		numero=prompt("ingrese numeros");
		numero=parseInt(numero);
		acumulador=aumulador+numero;
		respuesta=prompt("quiere ingresar mas numeros?");
		



	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN