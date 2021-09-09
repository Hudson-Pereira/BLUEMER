const prompt = require('prompt-sync')();
let candA = 0;
let candB = 0;
let candC = 0;
let votB = 0;
let votN = 0;
let eleit = prompt("Quantas pessoas irão votar? ");
let anoNascimento = +prompt("Digite a data do seu nascimento: ");
let voto = prompt("Digite 1 para votar no candidato A, 2 para o candidato B e 3 para o candidato C. 'B' para voto em branco e 'N' para voto nulo ");

 function autorizaVoto(anodeNascimeto){
    if (anodeNascimento > 2005) {
    console.log("Negado");
    } else if (anodeNascimeto === 2005) {
    console.log("Opcional");
    } else if (anodeNascimento < 2005){
    console.log("Obrigatório");
    } else {
        console.log('inválido.'); //add
    };
 };

autorizaVoto();

if (voto == "1"){
candA = candA + 1;
}
else if (voto == "2"){
candB = candB + 1;
}
else if (voto == "3"){
candC = candC + 1;
}
else if (voto == "B"){
   votB = votB + 1;
}
else if(voto == "N"){
   votN = votN + 1;
} else {
    console.log('Inválido.'); //add
};

console.log("O candidato A teve" + candA  + "votos.");
console.log("O candidato B teve" + candB + "votos.");
console.log("O candidato C teve" + candC + "votos.");
console.log("E tivemos ao todo" + votB + "votos Brancos e "+ votN + "votos nulos.");