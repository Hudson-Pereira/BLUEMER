const prompt = require('prompt-sync')();

var name = prompt('Olá humano, tudo bem com você? Para inciar, me diga qual seu nome?');
console.log(`Olá ${name}, vamos jogar JoKenPo?`);
let count = +prompt('Quantas vezes você quer jogar? ');

for (i=0;i<count;i++){

        let humano = prompt('Escolha pedra, tesoura ou papel: ');
        if(humano === 'pedra'){
            console.log(`Você escolheu ${humano}.`);
        } else if(humano === 'tesoura'){
            console.log(`Você escolheu ${humano}.`);
        } else if(humano === 'papel'){
            console.log(`Você escolheu ${humano}.`);
        };

        let jkp = Math.floor(Math.random() * 4 + 1);// <var> = num inteiro(num aleatorio()) de 1 a 3

        if (jkp === 1){
            jkp = 'pedra';
            console.log(`O computador escolheu ${jkp}.`);
        } else if (jkp === 2){
            jkp = 'tesoura';
            console.log(`O computador escolheu ${jkp}.`);
        } else if (jkp === 3) {
            jkp = 'papel';
            console.log(`O computador escolheu ${jkp}.`);
        } else {
            jkp = 'W.O.';
            console.log('O computador desistiu, você venceu.')
        };

        let totalH = 0;
        let totalPc = 0;

        if (humano === 'pedra' && jkp === 'pedra') {
            console.log('Empatou, um ponto para cada!');
            totalH ++;
            totalPc ++;
            console.log(`Humano - ${totalH};`);
            console.log(`Computador - ${totalPc};`);
        
        } else if (humano === 'pedra' && jkp === 'papel') {
            console.log('Computador WINS. Ponto para ele.');
            totalPc ++;
            console.log(`Humano - ${totalH};`);
            console.log(`Computador - ${totalPc};`);

        } else if (humano === 'pedra' && jkp === 'tesoura') {
            console.log('Humano WINS. Ponto para ele.');
            totalH ++;
            console.log(`Humano - ${totalH};`);
            console.log(`Computador - ${totalPc};`);

        } else if (humano === 'papel' && jkp === 'pedra') {
            console.log('Humano WINS. Ponto para ele.');
            totalH ++;
            console.log(`Humano - ${totalH};`);
            console.log(`Computador - ${totalPc};`);

        } else if (humano === 'papel' && jkp === 'papel') {
            console.log('Empatou, um ponto para cada!');
            totalH ++;
            totalPc++;
            console.log(`Humano - ${totalH};`);
            console.log(`Computador - ${totalPc};`);

        } else if (humano === 'papel' && jkp === 'tesoura') {
            console.log('Computador WINS. Ponto para ele.');
            totalPc ++;
            console.log(`Humano - ${totalH};`);
            console.log(`Computador - ${totalPc};`);

        } else if (humano === 'tesoura' && jkp === 'pedra'){
            console.log('Computador WINS. Ponto para ele.');
            totalPc ++;
            console.log(`Humano - ${totalH};`);
            console.log(`Computador - ${totalPc};`);

        } else if (humano === 'tesoura' && jkp === 'papel'){
            console.log('Humano WINS. Ponto para ele.');
            totalH ++;
            console.log(`Humano - ${totalH};`);
            console.log(`Computador - ${totalPc};`);

        } else if (humano ==='tesoura' && jkp ==='tesoura') {
            console.log('Empatou, um ponto para cada!');
            totalH ++;
            totalPc ++;
            console.log(`Humano - ${totalH};`);
            console.log(`Computador - ${totalPc};`);

        } else if (jkp === 'W.O.'){
            totalH ++;
            console.log(`Humano - ${totalH};`);
            console.log(`Computador - ${totalPc};`);

        } else {
            console.log('Jogue direito.')
        };
        console.log(totalH);
        console.log(totalPc);
};
