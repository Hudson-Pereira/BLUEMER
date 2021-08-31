//
let pessoas = {}; //objeto vazio.

let pessoa1 = {
    nome: 'Hudson',
    sobrenome: 'Oliveira',
    genero: 'Masculino'
};

console.log(pessoa1);
console.log(pessoa1.nome);
console.log(pessoa1.genero);

pessoa1.profissao = 'Programador';

console.log(pessoa1);

delete pessoa1.sobrenome;

console.log(pessoa1)

pessoa1.interesse = ['Animes','Filmes','Carro','Dinheiro'];
console.log(pessoa1);
console.log(pessoa1.interesse[3]);