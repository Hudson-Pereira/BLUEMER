const prompt = require('prompt-sync')();
// Desafio 2

/* Crie UM DICIONÁRIO de carros, com no mínimo 7 carros, contendo os seguintes campos: id, modelo, 
marca e preço. Todas as informações serão recebidas pelo prompt. O usuário pode comprar mais de um 
carro e o programa deve retornar o valor total da venda. Enquanto o usuário exclusivo por comprar menos
 do que 3 carros, o programa deve exibir a seguinte mensagem: "Deseja comprar outro carro?" em caso 
 afirmativo ou programa continua em execução, caso contrário é finalizado.
* O programa deve retornar o valor total sem padrão monetário - R $ 50.000,00
** Dica **: sempre reveja o que você escreveu */


//adiciona item ao dicionario.          carros['novo'] = 'novo'; 
let carro = {};

carro['id1'] = +prompt('Digite o ID do carro: ');
carro['modelo1'] = prompt('Digite o modelo do carro: ');
carro['marca1'] = prompt('Digite a marca do carro: ');
carro['preco1'] = +prompt('Digite o preco do carro: ');

console.log(`Informacoes do carro\n ID: ${carro.id1}\n MODELO: ${carro.modelo1}\n MARCA: ${carro.marca1}\n VALOR: ${carro.preco1}`);

carro['id2'] = +prompt('Digite o ID do carro: ');
carro['modelo2'] = prompt('Digite o modelo do carro: ');
carro['marca2'] = prompt('Digite a marca do carro: ');
carro['preco2'] = +prompt('Digite o preco do carro: ');

console.log(`Informacoes do carro\n ID: ${carro.id2}\n MODELO: ${carro.modelo2}\n MARCA: ${carro.marca2}\n VALOR: ${carro.preco2}`);

carro['id3'] = +prompt('Digite o ID do carro: ');
carro['modelo3'] = prompt('Digite o modelo do carro: ');
carro['marca3'] = prompt('Digite a marca do carro: ');
carro['preco3'] = +prompt('Digite o preco do carro: ');

console.log(`Informacoes do carro\n ID: ${carro.id3}\n MODELO: ${carro.modelo3}\n MARCA: ${carro.marca3}\n VALOR: ${carro.preco3}`);

carro['id4'] = +prompt('Digite o ID do carro: ');
carro['modelo4'] = prompt('Digite o modelo do carro: ');
carro['marca4'] = prompt('Digite a marca do carro: ');
carro['preco4'] = +prompt('Digite o preco do carro: ');

console.log(`Informacoes do carro\n ID: ${carro.id4}\n MODELO: ${carro.modelo4}\n MARCA: ${carro.marca4}\n VALOR: ${carro.preco4}`);

carro['id5'] = +prompt('Digite o ID do carro: ');
carro['modelo5'] = prompt('Digite o modelo do carro: ');
carro['marca5'] = prompt('Digite a marca do carro: ');
carro['preco5'] = +prompt('Digite o preco do carro: ');

console.log(`Informacoes do carro\n ID: ${carro.id5}\n MODELO: ${carro.modelo5}\n MARCA: ${carro.marca5}\n VALOR: ${carro.preco5}`);

carro['id6'] = +prompt('Digite o ID do carro: ');
carro['modelo6'] = prompt('Digite o modelo do carro: ');
carro['marca6'] = prompt('Digite a marca do carro: ');
carro['preco6'] = +prompt('Digite o preco do carro: ');

console.log(`Informacoes do carro\n ID: ${carro.id6}\n MODELO: ${carro.modelo6}\n MARCA: ${carro.marca6}\n VALOR: ${carro.preco6}`);

carro['id7'] = +prompt('Digite o ID do carro: ');
carro['modelo7'] = prompt('Digite o modelo do carro: ');
carro['marca7'] = prompt('Digite a marca do carro: ');
carro['preco7'] = +prompt('Digite o preco do carro: ');

console.log(`Informacoes do carro\n ID: ${carro.id7}\n MODELO: ${carro.modelo7}\n MARCA: ${carro.marca7}\n VALOR: ${carro.preco7}`);
console.log();
console.log(carro);
console.log();

//let qtd = +prompt('Selecione o carro que voce quer comprar.');



