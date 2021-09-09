const prompt = require('prompt-sync')();

// programas sincronos - traz os resultados na hora da execução.
// programas assincronos - as coisas não acontecem na hora

//criar uma funcao para simular o envio do email


function enviarEmail(corpo, para){

    setTimeout(function() {
        console.log(`
        
        Para: ${para}
        -------------------------------------------
        ${corpo}
        -------------------------------------------

        De: Hudson Oliveira Pereira

        `);        
    }, 4000);

};
console.log('Enviando email...');
enviarEmail('EU TE AMO!!!','Ramona');