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

        `);
        callback();        
    }, 4000);

};
console.log('Enviando email...');

enviarEmail('VAI DORMIR','Rebecca',function(){
console.log('Email enviado.');
});

    setTimeout(function() {
        console.log('Email entregue.');
    }, 8000);