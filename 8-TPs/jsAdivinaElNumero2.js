/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
contadorIntentos=0

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100

	numeroSecreto=Math.floor(Math.random()*(101-1)+1); 
	console.log(numeroSecreto);

	 
	

}

function verificar()
{ 
	var numeroUsuario;
	numeroUsuario=document.getElementById("numero").value;
	numeroSecreto=89;
	contadorIntentos=contadorIntentos + 1;
	document.getElementById("intentos").value=contadorIntentos;
	if(numeroSecreto == numeroUsuario && contadorIntentos == 1){ 
		alert(" usted es un psiquico");
	} else {
		if(numeroSecreto == numeroUsuario && contadorIntentos ==2){
			alert("excelente persepcion");
		} else {
			if(numeroSecreto == numeroUsuario && contadorIntentos == 3){
				alert(" esto es suerte");

				
			} else {
				if(numeroSecreto == numeroUsuario && contadorIntentos == 4){
					alert("excelente tecnica");
				} else {
					if(numeroSecreto == numeroUsuario && contadorIntentos == 5){
						alert("usted esta en la media");
					} else {
						if(numeroSecreto == numeroUsuario && contadorIntentos <=10){
							alert("falta tecnica");
						} else{
							if(numeroSecreto == numeroUsuario && contadorIntentos >=10 ){
								alert("afortunado en el amor");
							}
						}
					}
				}
			}
		}  
	}
	
	
	

}