const prompt = require('prompt-sync')();

// programas sincronos - traz os resultados na hora da execução.
// programas assincronos - as coisas não acontecem na hora
// o nosso callback deve ser passado como um parametro dentro da funcao enviarEmail
//criar uma funcao para simular o envio do email


function enviarEmail(corpo, para, callback){

    setTimeout(function() {
        console.log(`
        
        Para: ${para}
        -------------------------------------------
        ${corpo}
        -------------------------------------------

        De: Hudson Oliveira Pereira

        `); // template literals

    //Posso atribuir quantos parametros eu precisar na minha callback
        callback('OK', 1, '4s', 'Hudson');        
    }, 4000);

};
console.log('Enviando email...');

//quando definir parametros dentro do callback, deve-se atribuir tbm os indices dentro do function na chamada
enviarEmail('VAI DORMIR','Rebecca',function(status, amount, time, name){
    console.log(`
    
        De: ${name}.
        Status: ${status}.
        ---------------------------------------------
        Contatos: ${amount}.
        Tempo de espera: ${time}.
    
    `);

});

    setTimeout(function() {
        console.log('Email entregue.');
    }, 8000);