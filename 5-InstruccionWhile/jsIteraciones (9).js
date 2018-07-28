function mostrar()
{

	var contador=0;
	var bandera=true; 
	var maximo;
	var minimo;
	var numero;


	// declarar variables
	
	var respuesta='si';
	

	while(respuesta!='no')
	{
		numero=prompt("ingrese numeros");
		numero=parseInt(numero);
		if(bandera ) {
			bandera=false;
			maximo=numero;
			minimo=numero;


		} if(numero>maximo){
			maximo=numero ;
		}
		if(numero<minimo){
			numero=minimo
		}
		respuesta=prompt("quiere ingresar otro numero?");
		alert("el numero maximo ingresado fue: "+ maximo +" el numero minimo ingrsado fue: "+ minimo  );
		
	
	}




}//FIN DE LA FUNCIÓN