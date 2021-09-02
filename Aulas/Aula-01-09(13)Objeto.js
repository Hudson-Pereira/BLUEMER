const prompt = require('prompt-sync')();

const filme = {
    nome: 'Homem de Aço.',
    duracao: 120,
    ano: 2000,
    atores: ['Henry Calvin','Clark Kent'],
};

console.log(filme);
console.log('------------------------------------------------------------------');
console.log(Object.keys(filme));
console.log('===================================================================');
const props = Object.keys(filme);

for(let i=0;i<props.length;i++){
    console.log(filme[props[i]]);
};
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');

for (i of props){
    console.log(filme[i]);
};
console.log('*******************************************************************');

for (i in filme){
    console.log(i,filme[i]);
};