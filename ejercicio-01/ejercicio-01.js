function isValidCard(creditCardNumber) {
    // Escribe tu código aquí
   if(typeof(creditCardNumber)!== 'number'){
    	return "Error de dato"
    }
   if(creditCardNumber=='undefined'){
		return "Ingresa un dato"
	}
	if (creditCardNumber.toString().length!==16){
    return "Faltan numeros";
  }
}
//Para pruebas 4 y 5
function validarNumero(numeroTarjeta){
  var numeroString = (numeroTarjeta.toString()).split("");
  var numeros = numeroString.map(convertirNumeros); //convertir a números
  var paresMultiplicados = numeros.map(multiplicacionPares); //posiciones pares * 2
  var numerosFinales = paresMultiplicados.map(reducirNumPar); //reducir nums a una cifra
  var sumaNumeros = numerosFinales.reduce(sumaTodos); //suma de todos los números
  if(sumaNumeros%10 === 0){
    return true;
  }
}

function convertirNumeros(numero){
  return parseInt(numero);
}

function multiplicacionPares(elemento,i){
  if(i%2 == 0){
    return elemento*2;
  }else{
    return elemento;
  }
}

function reducirNumPar(num){
  if(num > 9){
    return num-9;
  }else{
    return num;
  }
}

function sumaTodos(suma,numero){
  return suma + numero;
}


// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
