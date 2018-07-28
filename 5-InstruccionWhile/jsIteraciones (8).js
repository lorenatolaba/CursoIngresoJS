function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
	var numero;

	while( respuesta == "si"){
		numero=prompt("ingrese numeros");
		numero=parseInt(numero);
		contador ++;
		respuesta=prompt("quiere ingresar otro numero?");

		if( numero >=0){
			positivo= positivo + numero;
		} else {

			negativo= negativo * numero;
		}

	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN