const prompt = require('prompt-sync')();
// Desafio
/*Crie um programa que leia nome, ano de nascimento e carteira de
trabalho e cadastre-os (com idade) em um objeto. Se por acaso a CTPS for diferente
de 0, o objeto receberá também o ano de contratação e o salário. Calcule e
acrescente , além da idade , com quantos anos a pessoa vai se aposentar. Considere
que o trabalhador deve contribuir por 35 anos para se aposentar.
*/

console.log('DESAFIO APOSENTADORIA');

let trabalhador = {};

trabalhador.nome = prompt('Digite o nome do trabalhador: ');
trabalhador.nasc = parseInt(prompt('Digite o ano de nascimento do trabalhador com 4 dígitos: '));
trabalhador.idade = 2021 - trabalhador.nasc;
trabalhador.ctps = parseInt(prompt('Digite o número da CTPS do trabalhador: '));

    if (trabalhador.ctps !== 0){
        trabalhador.contrato = parseInt(prompt('Digite o ano de contratação do trabalhador com 4 dígitos: '));
        trabalhador.salario = parseInt(prompt('Digite o salário do trabalhador: '));
        trabalhador.ap = trabalhador.idade + 35; 
        console.log(`O trabalhador ${trabalhador.nome} de ${trabalhador.idade} anos vai se aposentar com ${trabalhador.ap} anos.`)       
        console.log(Object.entries(trabalhador));
    } else { 
        console.log(`Não foi encontrada a CTPS sob o número ${trabalhador.ctps}. ${trabalhador.nome} de ${trabalhador.idade} anos ainda não iniciou sua carreira.`);
    };