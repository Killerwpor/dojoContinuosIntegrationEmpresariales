module.exports = class Codebreaker{

  constructor(){
  }

 guess(numero) {
  var secreto=["1","2","3","4"];
  var digitos=[];
  for(var i=0;i<numero.length;i++){
    digitos.push(numero.substring(i,i+1));
  }
    var respuesta="";
    for(var k=0;k<4;k++){
     
      if(digitos[k]==secreto[k]){
        respuesta+=" x";
      }
      else if(digitos[k]=="1" || digitos[k]=="2" || digitos[k]=="3" || digitos[k]=="4"){
        respuesta+=" _";
      }
    }
    return respuesta; 
  }

}
 
  //module.exports.guess = guess;
   