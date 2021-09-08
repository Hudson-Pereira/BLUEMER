//
let pessoas = {}; //objeto vazio.

let pessoa1 = {
    nome: 'Hudson',
    sobrenome: 'Oliveira',
    genero: 'Masculino'
};

console.log(pessoa1); //imprime o objeto todo
console.log(pessoa1.nome); //imprime apenas um item do objeto
console.log(pessoa1.genero);

pessoa1.profissao = 'Programador'; //adiciona uma propriedade com um valor

console.log(pessoa1);

delete pessoa1.sobrenome; //deleta uma propriedade

console.log(pessoa1)

pessoa1.interesse = ['Animes','Filmes','Carro','Dinheiro']; //insere um array no objeto
console.log(pessoa1);
console.log(pessoa1.interesse[3]); //imprime o item especificado em [] da propriedade especificada
