//Lista --> tipo de dada em JS que nos permite ler diversos valores em sequencia.
//Parecido com array

let filmesTerror = [
  "O exorcista",
  "Freddy vs Jason",
  "A freira",
  "Halloween",
  "Annabelle",
  "Massacre da serra eletrica",
  "Olhos Famintos",
  "Sexta feira 13",
  "colheita maldita",
  "O exorcismo de Emilly Rose",
];

console.log(filmesTerror);
console.log(filmesTerror.length); //tamanho da lista

filmesTerror.push("IT"); //adiciona item ao final da lista

console.log(filmesTerror);
console.log(filmesTerror.length);

console.log(filmesTerror[0]); //mostra o item da lista que esta na posicao []

console.log('item excluido');
let exc = filmesTerror.pop(); //remove o ultimo item da lista e coloca numa variavel
console.log(exc);
let del = [];
del.push(filmesTerror.pop()); //adiciona um item a lista excluido de outra lista. 
del.push(filmesTerror.pop());
console.log(del);
console.log('array del');

console.log(filmesTerror);
console.log(filmesTerror.length);

console.log(filmesTerror[0]);

filmesTerror.unshift('Brinquedo assassino'); //adiciona item no inicio da lista

console.log(filmesTerror);
console.log(filmesTerror.length);

console.log(filmesTerror[0]);

filmesTerror.shift();
console.log(filmesTerror);
console.log(filmesTerror[0]);


