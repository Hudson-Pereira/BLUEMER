const prompt = require('prompt-sync')();
/*A ideia deste projeto é criar um programa que simule uma votação com todo o conteúdo visto no módulo até 
este momento. O programa tem que:
ok - Receber votos até que o usuário diga que não tem mais ninguém para votar; (1,0 ponto)
ok - Ter uma função chamada autorizaVoto(anoNascimento) retornando: "Negado`, "Opcional"  ou "Obrigatório"; (2,0 pontos)
ok - Ter uma função chamada votacao(autorizacao, voto) que valida  e contabiliza o voto (número entre 1 e 5) ou retorna 
a mensagem: "Você não pode votar", caso o voto não possa ser contabilizado; (2,0 pontos) 
ok - Contabilizar os votos de acordo com os significados (3,0 pontos):
1 = Candidato 1
2 = Candidato 2
3 = Candidato 3
4 = Voto Nulo`
5 = Voto em Branco
Ter uma função chamada exibirResultados() que deve mostrar: (2,0 pontos)
 - O total de votos para cada candidato 
 - O total de votos nulos
 - O total de votos em branco
 - Qual candidato venceu a votação
 */
function dados(){
    nasc = +prompt('Digite o ano de nascimento com 4 dígitos(xxxx): ');
    validaVoto();
    cont = prompt('Tem mais pessoas para votar? ')    
        
};
let nasc = 0;

function validaVoto(){
    let voto = 2021 - nasc;
    if (voto < 16){
        console.log(`Você tem ${voto} anos. Voto Negado. Ainda não possui idade mínima de 16 anos.`);
    } else if (voto >= 16 && voto < 18){
        console.log(`Você tem ${voto} anos. Seu voto é opcional, você decide se quer votar ou não.`);
        let menor = prompt('Quer votar?');
            if (menor == 's' || menor == 'S') {
                votacao();
            }; 
        nasc = voto;
    } else if (voto >= 18 && voto < 65){
        console.log(`Você tem ${voto} anos. Seu voto é obrigatório. Escolha um candidato.`);
        nasc = voto;
        votacao();
    } else if (voto >= 65 && voto < 100){
        console.log (`Você tem ${voto} anos. Você passou da idade obrigatória para voto. Seu voto é opcional.`);
        let menor = prompt('Quer votar?');
            if (menor == 's' || menor == 'S') {
                votacao();
            }; 
        nasc = voto;
    } else {
        console.log('ERRO!!!');
        
    };
};

let cand1 = 0;
let cand2 = 0;
let cand3 = 0;
let nulo = 0;
let brc = 0;

function votacao(){
    let option = 0;

    option = parseInt(prompt('Digite o número do seu candidato: '));
        if (option == 1){
            cand1++;
       } else if (option == 2) {
            cand2++;
        } else if (option == 3) {
            cand3++;
        } else if (option == 4) {
            nulo++;
        } else if (option == 5) {
            brc++;
        } else {
            console.log('Você não pode votar com essa opção.');
        };
};

function exibirResultados(){
    let total = [];
    console.log(`O candidato 1 recebeu ${cand1} votos.`);
    console.log(`O candidato 2 recebeu ${cand2} votos.`);
    console.log(`O candidato 3 recebeu ${cand3} votos.`);
    console.log(`Tiveram ${nulo} votos nulos.`);
    console.log(`Tiveram ${brc} votos em branco.`);

    total.push(cand1);
    total.push(cand2);
    total.push(cand3);
    
    let ord = total.sort(function(a,b) {
        if (a.dado > b.dado){
            return 1 
        }; 
        if(a.dado < b.dado) {
            return -1
        };
        return 0;
    });
    
    
    };
};


// INICIO PROGRAMA
console.log();
console.log('VOTAÇÃO');
console.log();
console.log('CADIDATO 1 - Opção 1.');
console.log('CADIDATO 2 - Opção 2.');
console.log('CADIDATO 3 - Opção 3.');
console.log('NULO - Opção 4.');
console.log('EM BRANCO - Opção 5.');

console.log('=================================================================================');
console.log();
console.log('Atenção, responda apenas com S para sim ou N para não.');
console.log();

let cont = prompt('Tem pessoas para votar? ');

    while (cont == 's' || cont == 'S'){
        dados();      
    };

exibirResultados();
