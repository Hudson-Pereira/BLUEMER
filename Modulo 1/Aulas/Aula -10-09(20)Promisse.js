const prompt = require('prompt-sync')();
/* 
Promises: Evolução das callbacks, é uma forma mais "sofisticada" de trabalharmos com programação assíncrona.
Uma promessa é um callback “gourmet”.
As promessas são cada vez mais utilizadas no dia a dia do programador js. Elas são utilizazadas no React (BIBLIOTECA js), Angular, Vue.js, Express, Node.js, entre outros.
Promessa:
Promessa (Podemos fazer uma analogia com o mundo real): Sempre que "prometemos" algo para alguém existem 2 possibilidades: cumprir com o prometido (RESOLVE) ou não cumprir (REJECT).
Email => Resolver: "OK" - Rejeitar: "Falha ao enviar o email"
Salvar => Resolver: "Dados salvos" - Rejeitar: Falha ao salvar os dados.
*/

function  enviarEmail ( corpo ,  para )  {
  retornar  nova  promessa ( ( resolver ,  rejeitar )  =>  {
    setTimeout ( function  ( )  {
      let  deuerro  =  true ;

      if  ( ! deuerro )  {
        resolver ( ) ;  // Promessa OK!
      }  else  {
        rejeitar ( ) ;  // Foi mal, eu falhei na missão :(
      }
    } ,  5000 ) ;
  } ) ;
}

// Usamos o .then para que o programa execute as ações que eu quiser quando uma promessa para RESOLVE.

// Usamos o .catch para fazer o tratamento da promessa, ou seja, como o meu programa deve se comportar quando status da promessa = REJEITAR.

enviarEmail ( "Olá Bluemers;)" ,  "avestruzqueteseduz@gmail.com" )
  . então ( função  ( )  {
    console . log ( "OPA, você fez o que PROMETEU !!!" ) ;
  } )
  . catch ( function  ( )  {
    console . log ( "QUE PENA, dessa vez não rolou." ) ;
  } ) ;