const prompt = require('prompt-sync')();

//FOR cria um loop com tres argumentos.
//Exercicios FOR OF

// 1
let lista = ['Artur','Hector','Amanda','Chanely','Joyce','Karen','Hudson'];

console.log(lista.length);
//for of
for (let f of lista){
    console.log(f);     //percorreu a lista imprimindo o item atual da rodada
};

// 2
let num = [10,12,2,245,4,87,1];

for (let c of num){
    console.log(c+1);
};

// 3
let txt = 'Oi, meu nome é Hudson.';

for (let i of txt){
    console.log(i);
};
let a = [];
let c = [0,1,2];
for (let i of c){
a.push(+prompt('Digite um número: '));

};
console.log(a);
let t = 0;
for (let i of a){
  
 let b = (+prompt(`Digite um novo valor para a posicao ${t}.`));

  a.splice(t,1,b);

  t = t + 1;
  };
console.log(a);
