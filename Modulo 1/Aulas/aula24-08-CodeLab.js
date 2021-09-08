let lista = [];
lista.unshift('cabelo');
console.log('lista pos unshift');
console.log(lista);

lista.push('pele');
console.log('lista pos push');
console.log(lista);

lista.push('osso');
console.log('lista pos push');
console.log(lista);

lista.unshift('dedo');
console.log('lista pos unshift');
console.log(lista);

lista.unshift('mao');
console.log('lista pos unshift');
console.log(lista);

lista.unshift('pe');
console.log('lista pos push');
console.log(lista);

lista.push('unha');
console.log('lista pos push');
console.log(lista);

lista.splice(0,1); //exclui a partir da posicao 1 um item
console.log('lista pos splice 0,1');
console.log(lista);

lista.splice(2,0,'novo');//da posicao 2, remover nada, adicionar novo
console.log('lista pos splice 2,0,novo');
console.log(lista);

lista.splice(5,1,'novo2','novo3');//na posicao 5, remover 1, adicionar novo2,novo3
console.log('lista pos splice 5,1,novo2,novo3');
console.log(lista);

//lista.fill('Hudson'); troca todos os itens por hudson
//lista.fill('Hudson',1);troca todos os itens a partir da posicao passada(1)
lista.fill('Hudson',1,2);//troca do item passado(1) ate o segundo(2)
console.log(lista);
console.log('pos fill');
