module.exports = class Codebreaker{
  
  secreto=[];
  respuestaAux="";

  constructor(tipo,numeroSecreto){
if(tipo==1) {//si es 1 entonces se envia el secreto
    for(var i=0;i<numeroSecreto.length;i++){
      this.secreto.push(numeroSecreto.substring(i,i+1));
    }  
    return "se inicio con clave"; 
  }
  else{ //si es 0 entonces secreto es random    
    this.secreto.push((Math.floor(Math.random() * 10)).toString());
    this.secreto.push((Math.floor(Math.random() * 10)).toString());
    this.secreto.push((Math.floor(Math.random() * 10)).toString());
    this.secreto.push((Math.floor(Math.random() * 10)).toString());  
    return "se inicio random"; 
  }
}
 

  

 guess(numero) {
  var digitos=[];
  for(var i=0;i<numero.length;i++){
    digitos.push(numero.substring(i,i+1));
  }
    var respuesta="";
    for(var k=0;k<4;k++){
     
      if(digitos[k]==this.secreto[k]){
        respuesta+=" x";
      }
      else if(digitos[k]==this.secreto[0] || digitos[k]==this.secreto[1] || digitos[k]==this.secreto[2] || digitos[k]==this.secreto[3]){
        respuesta+=" _";
      }
    }
    this.respuestaAux=respuesta;
    return this.respuestaAux; 
  }

}


 
 
   