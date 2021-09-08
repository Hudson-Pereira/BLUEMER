const prompt = require('prompt-sync')();

var name = prompt('Olá humano, tudo bem com você? Para inciar, me diga qual seu nome?');
console.log(`Olá ${name}, vamos jogar JoKenPo?`);

jokenpo();
function jokenpo(){
let count = +prompt('Quantas vezes você quer jogar? ');

if (!isNaN(count)) {
console.log(`Ok, então vamos jogar ${count} vezes.`);

    let totalH = 0;
    let totalPc = 0;

    console.log(name+' = '+totalH);
    console.log('Computador = '+totalPc);

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

        if (humano === 'pedra' && jkp === 'pedra') {
            console.log('Empatou, um ponto para cada!');
            totalH ++;
            totalPc ++;
            console.log(name+' = '+totalH);
            console.log('Computador = '+totalPc);
        
        } else if (humano === 'pedra' && jkp === 'papel') {
            console.log('Computador WINS. Ponto para ele.');
            totalPc ++;
            console.log(name+' = '+totalH);
            console.log('Computador = '+totalPc);

        } else if (humano === 'pedra' && jkp === 'tesoura') {
            console.log('Humano WINS. Ponto para ele.');
            totalH ++;
            console.log(name+' = '+totalH);
            console.log('Computador = '+totalPc);

        } else if (humano === 'papel' && jkp === 'pedra') {
            console.log('Humano WINS. Ponto para ele.');
            totalH ++;
            console.log(name+' = '+totalH);
            console.log('Computador = '+totalPc);

        } else if (humano === 'papel' && jkp === 'papel') {
            console.log('Empatou, um ponto para cada!');
            totalH ++;
            totalPc++;
            console.log(name+' = '+totalH);
            console.log('Computador = '+totalPc);

        } else if (humano === 'papel' && jkp === 'tesoura') {
            console.log('Computador WINS. Ponto para ele.');
            totalPc ++;
            console.log(name+' = '+totalH);
            console.log('Computador = '+totalPc);

        } else if (humano === 'tesoura' && jkp === 'pedra'){
            console.log('Computador WINS. Ponto para ele.');
            totalPc ++;
            console.log(name+' = '+totalH);
            console.log('Computador = '+totalPc);

        } else if (humano === 'tesoura' && jkp === 'papel'){
            console.log('Humano WINS. Ponto para ele.');
            totalH ++;
            console.log(name+' = '+totalH);
            console.log('Computador = '+totalPc);

        } else if (humano ==='tesoura' && jkp ==='tesoura') {
            console.log('Empatou, um ponto para cada!');
            totalH ++;
            totalPc ++;
            console.log(name+' = '+totalH);
            console.log('Computador = '+totalPc);

        } else if (jkp === 'W.O.'){
            totalH ++;
            console.log(name+' = '+totalH);
            console.log('Computador = '+totalPc);

        } else {
            console.log('Jogue direito. Perdeu um ponto.')
            totalPc ++;
            console.log(name+' = '+totalH);
            console.log('Computador = '+totalPc);

        };
       
    };
    if (totalH > totalPc){
        console.log(`Você venceu ${totalH} vezes e perdeu ${totalPc} vezes.`);
        console.log('CAMPEÃO!!!');
        console.log('ORGULHO DE SER BLUEMER!!!!');
    } else if (totalH < totalPc) {
        console.log(`Você venceu ${totalH} vezes e perdeu ${totalPc} vezes.`);
        console.log('PERDEDOR!!! Vá aprender a jogar, marica...');
        console.log('ORGULHO DE SER BLUEMER!!!!');
    } else {
        console.log('EMPATE!!!')
        console.log('ORGULHO DE SER BLUEMER!!!!');
    };

    let repeat = prompt('Quer jogar novamente? Sim ou não.');
        if (repeat == 'sim' || repeat == 'Sim' || repeat == 'S' || repeat == 's') {
            jokenpo();

        } else {
            console.log('Obrigado por brincar. Venha você também ser um BLUEMER!!!');
        };
} else {
    console.log('Erro interno! Por favor, reinicie o programa.');
};
};
 