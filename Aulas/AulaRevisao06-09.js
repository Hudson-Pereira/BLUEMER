/*tabuada com foreach
1 - criar lista
2 - criar uma funcao
3 - NUNCA MUDA: nomedalista.forEach(nomedafuncao)
*/

let numeros = [0,1,2,3,4,5,6,7,8,9,10];

function tab5(item){
    console.log(item*5);
};

numeros.forEach(tab5);
