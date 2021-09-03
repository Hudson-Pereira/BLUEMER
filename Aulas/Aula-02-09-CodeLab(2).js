const prompt = require('prompt-sync')();
/*Faça um programa que leia nome e média de um aluno, guardando também a
situação em um objeto. No final, mostre o conteúdo da estrutura na tela. A média
para aprovação é 7. Se o aluno tirar entre 5 e 6.9 está de recuperação, caso
contrário é reprovado
*/

let aluno = {};

aluno.nome = prompt("Qual o nome do aluno: ");
aluno.media = +prompt("Qual a média das notas do aluno: ");

console.log(Object.entries(aluno));

    if (aluno.media < 0 || aluno.media > 10){
        console.log('Por favor, digite um entre 0 e 10. Para número decimal, utilizar ponto ao invés de vírgula.');
    } else if(aluno.media > 0 && aluno.media < 5){
        console.log('O aluno está reprovado.');
    } else if (aluno.media >= 5 && aluno.media < 7){
        console.log('O aluno está em recuperação.');
    } else {
        console.log('O aluno está aprovado.');
    };
