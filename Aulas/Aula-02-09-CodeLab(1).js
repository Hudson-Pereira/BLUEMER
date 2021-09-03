const prompt = require('prompt-sync')();
/*Crie um programa que leia o preço e a quantidade de um produto a ser
comprado, calculando o total da compra, guarde essas informações em um objeto.
Se o valor todal da compra for maior que R$ 100,00 de o desconto de 10%. No final mostre ao cliente a quantidade, o preço do produto e o
valor total de sua compra, considerando o desconto dado. Não se esqueça de
alterar o valor total no objeto.*/

let compra = {};

compra.prod = prompt('Qual produto vai comprar? ');
compra.qtd = +prompt('Quantos vai querer? ');
compra.valor = +prompt('Qual o valor do produto? ');
compra.total = compra.valor * compra.qtd;

let desconto = 0;
        
    if (compra.total > 100 && compra.total < 400){
        console.log(`Sua compra de ${compra.qtd} ${compra.prod}, no valor individual de R$ ${compra.valor} vai ficar: ${compra.total} reais`);
        let desc = 10/100;
        desconto = compra.total * desc;
        let totaldesc = compra.total - desconto;
        console.log(`Você ganhou desconto de 10%, que vale R$ ${desconto}.`);
        console.log(`Sua compra ficou R$ ${totaldesc}.`);
        compra.desc = desconto;
        compra.total = totaldesc;
        console.log('Resumo de sua compra: ');
        console.log(compra);
    } else if(compra.total >= 400 && compra.total <= 500) {
        console.log(`Sua compra de ${compra.qtd} ${compra.prod}, no valor individual de R$ ${compra.valor} vai ficar: ${compra.total} reais`);
        let desc = 15/100;
        desconto = compra.total * desc;
        let totaldesc = compra.total - desconto;
        console.log(`Você ganhou desconto 15%, que vale R$ ${desconto}.`);
        console.log(`Sua compra ficou R$ ${totaldesc}.`);
        compra.desc = desconto;
        compra.total = totaldesc;
        console.log('Resumo de sua compra: ');
        console.log(compra);
    } else if(compra.total > 500 ) {
        console.log(`Sua compra de ${compra.qtd} ${compra.prod}, no valor individual de R$ ${compra.valor} vai ficar: ${compra.total} reais`);
        let desc = 20/100;
        desconto = compra.total * desc;
        let totaldesc = compra.total - desconto;
        console.log(`Você ganhou desconto de 20%, que vale R$ ${desconto}.`);
        console.log(`Sua compra ficou R$ ${totaldesc}.`);
        compra.desc = desconto;
        compra.total = totaldesc;
        console.log('Resumo de sua compra: ');
        console.log(compra);
    } else {
        console.log(`Sua compra de ${compra.qtd} ${compra.prod}, no valor individual de R$ ${compra.valor} vai ficar: ${compra.total} reais`);
        console.log('Resumo de sua compra: ');
        console.log(compra);
    };
