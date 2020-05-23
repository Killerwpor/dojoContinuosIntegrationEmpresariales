const codebreaker=require("./codeBreaker");
var instancia=new codebreaker(1 ,"1234");
const express= require('express');
const app=express();





app.get("/iniciar",(req,res)=>{
 instancia=new codebreaker(req.query.tipo,req.query.numero);    
res.json({respuesta: instancia.secreto.toString()});
})

app.get("/codebreaker",(req,res)=>{  
   res.json({respuesta: instancia.guess(req.query.numero)});
})



module.exports=app;