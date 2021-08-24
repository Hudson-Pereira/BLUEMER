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

filmesTerror.pop(); //remove o ultimo item da lista

console.log(filmesTerror);
console.log(filmesTerror.length);

filmesTerror.unshift('Brinquedo assassino');

console.log(filmesTerror);
console.log(filmesTerror.length);


