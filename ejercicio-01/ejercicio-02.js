
var creditCardNumber=document.getElementById("numeroTarj");
var boton=document.getElementById("validacion");
boton.addEventListener("click",isValidCard);


function isValidCard(creditCardNumber) {
  if(typeof(creditCardNumber)!== 'number'){
     return "Error de dato";
     alert("Favor de ingresar sólo numeros");
     borrar();
   }
  if(creditCardNumber=='undefined'){
  // return "Ingresa un dato";
  alert("Favor de ingresar el numero de su Tarjeta");
 }
 if (creditCardNumber.toString().length!==16){
   //return "Faltan numeros";
   alert("Ingresar 16 dígitos");
 }
}

function borrar(){
  creditCardNumber=" ";
}

// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
