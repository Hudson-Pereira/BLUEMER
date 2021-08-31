const prompt = require('prompt-sync')();

let godzilla = {
    nome : 'Godzilla',
    duracao: '123 minutos',
    ano: 2014,
    diretor: 'Gareth Edwards',
    atores: ['Andy Serkis','Aaron Taylor-Johnson','Elizabeth Olsen','Bryan Cranston','Juliette Binoche','David Strathairn','Sally Hawkins','Ken Watanabe'],
};
godzilla.dados = function(){
    return `O filme ${this.nome}, tem duracao de aproximadamente ${this.duracao}, foi produzido em ${this.ano} pelo diretor ${this.diretor} e tem em seu elenco atores como ${this.atores}.`;
};

let godzilla2 = {
    nome : 'Godzilla 2: Rei dos Monstros',
    duracao: '132 minutos',
    ano: 2019,
    diretor: 'Michael Dougherty',
    atores: ['Kyle Chandler','Vera Farmiga','Millie Bobby Brown','Alexandra Rachael Rabe','Bradley Whitford'],
};
godzilla2.dados = function(){
    return `O filme ${this.nome}, tem duracao de aproximadamente ${this.duracao}, foi produzido em ${this.ano} pelo diretor ${this.diretor} e tem em seu elenco atores como ${this.atores}.`;
};

let Vingadores = {
    nome : 'Vingadores',
    duracao: '125 minutos',
    ano: 2010,
    diretor: 'Stephen',
    atores: ['Robert Downney Jr.','Scarllet Johansson','Millie Bobby Brown','Alexandra Rachael Rabe','Bradley Whitford'],
};
Vingadores.dados = function(){
    return `O filme ${this.nome}, tem duracao de aproximadamente ${this.duracao}, foi produzido em ${this.ano} pelo diretor ${this.diretor} e tem em seu elenco atores como ${this.atores}.`;
};

let aladdin = {
    nome : 'Aladdin',
    duracao: '120 minutos',
    ano: 2019,
    diretor: 'King',
    atores: ['Will Smith','Prince Ally','Jasmine','Alexandra Rachael Rabe','Bradley Whitford'],
};
aladdin.dados = function(){
    return `O filme ${this.nome}, tem duracao de aproximadamente ${this.duracao}, foi produzido em ${this.ano} pelo diretor ${this.diretor} e tem em seu elenco atores como ${this.atores}.`;
};

let gladiador = {
    nome : 'Gladiador',
    duracao: '150 minutos',
    ano: 1997,
    diretor: 'Spielberg',
    atores: ['Liam Nesson','Julio Cesar','Maximus','Russel Crower','Bradley Whitford'],
};
gladiador.dados = function(){
    return `O filme ${this.nome}, tem duracao de aproximadamente ${this.duracao}, foi produzido em ${this.ano} pelo diretor ${this.diretor} e tem em seu elenco atores como ${this.atores}.`;
};


console.log(godzilla.dados());
console.log();
console.log(godzilla2.dados());
console.log();
console.log(Vingadores.dados());
console.log();
console.log(aladdin.dados());
console.log();
console.log(gladiador.dados());
console.log();

//tarefa 2
delete godzilla.dados;
delete godzilla2.dados;
delete Vingadores.dados;
delete aladdin.dados;
delete gladiador.dados;
console.log('Catalogo');
let catalogo = [godzilla, godzilla2, Vingadores, aladdin];

for (i of catalogo){
    console.log(i);
};

