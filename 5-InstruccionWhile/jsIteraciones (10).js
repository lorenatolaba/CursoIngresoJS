function mostrar()
{
	var num;
	var contPosit=0;
	var contNeg=0;
	var acumPosit=0;
	var acumNeg=0;
	var cantCeros=0;
	var cantPar=0;
	var promPosit;
	var promNeg;
	var dif;
	var msg;

	
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		num=prompt("ingrese numeros");
		num=parseInt(num);
		respuesta=prompt("quiere seguir ingresando?")
		
		while(isNaN(num)){
		num=prompt("ingrese numeros");
		num=parseInt(num);
		respuesta=prompt("quiere seguir  ingresando numeros?")
		}
		if(num<0){
			acumNeg+=num;
			contNeg++;
		}

		else if(num >0){
			acumPosit+=num;
			contPosit ++;
		}
		else{
			cantCeros ++;
		}
		if((num%2) == 0 && num!=0){
			cantPar ++;
		}
	
	}
	promNeg=acumNeg/contNeg;
	promPosit=acumPosit/contPosit;

	dif=contPosit-contNeg;

	if(dif<0){
		msg="hay mas n° negativos por: " + (dif*-1);
	}

	else if (dif==0){
		msg="hay mas cantidad de ceros" ;

	}
	else{
		msg="hay mas n° positivos por: "+ dif;
	}

	document.write("1. la suma de negativos: "+ acumNeg + "<br>");
	document.write("2. la suma de positivos: " + acumPosit+ "<br>");
	document.write("3. cantidad de N negativos: " + contNeg + "<br>");
	document.write("4. cantidad de numeros positivos: " + contPosit + "<br>");
	document.write("5. cantidad de ceros: " + cantCeros + "<br>");
	document.write("6. cantidad de N pares: " + cantPar + "<br>");
	document.write("7. promedio de los numeros negativos: "+ promNeg + "<br>");
	document.write("8. promedio de N positivos: " + promPosit + "<br>");
	document.write(msg);




}//FIN DE LA FUNCIÓN