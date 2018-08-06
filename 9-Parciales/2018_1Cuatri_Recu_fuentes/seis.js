function mostrar()
{
    var nota;

    nota= prompt("ingrese nota");

    switch(nota){
        case "0":
        case "1":
        case "2":
        case "3":
        alert("la proxima se puede");
        break;
        case "4":
        case "5":
        case "6":
        alert("raspando");
        break;
        case "7":
        case "8":
        case "9":
        alert("aprobó");
        break;
        default:
        alert("la nota no es valida");
    }
    if(nota>8){
        alert("muy bien")
    }else if (nota < 5 ){
        alert("debes preocuparte mas");
    }

}
/*Se ingresa una nota. 
Si está entre las 0 y las 3 mostrar: "la próxima se puede", 
si es desde las 4 a las 6: "raspando", de lo contrario informar que aprobó. 
Informar si la nota no es válida. 
Si es aprobó y la nota es mayor a 8 se debe agregar el mensaje: "muy bien". 

Si es nota para “raspando” y la nota es menor a 5 se debe agregar el mensaje:
 "debes preocuparte más". 
Aclaración: hacer un switch y dentro toda la lógica incluyendo los if y con una 
sola ventana alert.*/
