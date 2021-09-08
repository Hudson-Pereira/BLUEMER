const prompt = require('prompt-sync')();
// Desafio
/* Crie uma LISTA de produtos onde a mesma apresente os seguintes campos: descrição, valor e quantidade. Com base nas informações sobre o seu programa deve mostrar o valor total gasto na compra.
Exemplo: 
Mercado Sexta da Maldade
Descrição: Coca Cola - Valor: R $ 9,00 - Quantidade: 10
Toddynho - R $ 3,50 - Quantidade: 5
Doritos - R $ 2,00 - Quantidade 2
O programa deve retornar: Total: 111,50
*/

console.log('Mercado\n');

let refri = {
    descricao: 'Kuat',
    valor: '6,00',
    quantidade: 15,
};
let achocolatado = {
    descricao: 'Cemil',
    valor: '2,00',
    quantidade: 7,
};
let salgadinho = {
    descricao: 'Crocao',
    valor: '3,00',
    quantidade: 25,
};

console.log('Produto');
for (let i in refri){
    console.log(i+' - '+refri[i]);
};
console.log();

console.log('Produto');
for (let i in achocolatado){
    console.log(i+' - '+achocolatado[i]);
};
console.log();

console.log('Produto');
for (let i in salgadinho){
    console.log(i+' - '+salgadinho[i]);
};

let valorR = (parseFloat(refri.valor));
let valorA = (parseFloat(achocolatado.valor));
let valorS = (parseFloat(salgadinho.valor));

let TR = valorR * refri.quantidade;
let TA = valorA * achocolatado.quantidade;
let TS = valorS * salgadinho.quantidade;

let TT = parseFloat(TR + TA + TS);
console.log();
console.log(`Valor total dos produtos: R$ ${TT},00`);
