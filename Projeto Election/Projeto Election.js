const prompt = require('prompt-sync')();
/*A ideia deste projeto é criar um programa que simule uma votação com todo o conteúdo visto no módulo até 
este momento. O programa tem que:
Receber votos até que o usuário diga que não tem mais ninguém para votar; (1,0 ponto) OK
Ter uma função chamada autorizaVoto(anoNascimento) retornando: "Negado`, "Opcional"  ou "Obrigatório"; (2,0 pontos)
Ter uma função chamada votacao(autorizacao, voto) que valida  e contabiliza o voto (número entre 1 e 5) ou retorna a mensagem: "Você não pode votar", caso o voto não possa ser contabilizado; (2,0 pontos) 
Contabilizar os votos de acordo com os significados (3,0 pontos):
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

console.log();
console.log('VOTAÇÃO');
console.log('=================================================================================');
console.log();
console.log('Atenção, responda apenas com S para sim ou N para não.');
console.log();
let cont = prompt('Tem pessoas para votar? ');

while (cont == 's' || cont == 'S'){
    
    cont = prompt('Tem mais pessoas para votar? ')    
};