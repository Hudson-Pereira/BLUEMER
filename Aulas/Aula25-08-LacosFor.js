//Estruturas de repeticao.

console.log('inicio laco for');
for (let i=1; i<=3; i++){
console.log(i); //for
};
console.log('fim laco for');

console.log('inicio laco for in')
let carro = {modelo: 'Prisma', marca:'Chevrolet', ano: 2022}; //Dicionario -> variavel = {caracteristica:'valor',caracteristica:'valor'};

for (let caracteristica in carro) { //for in
//    console.log(caracteristica+':'+carro[caracteristica]);
    console.log(`${caracteristica}:${carro[caracteristica]}`);
};
console.log('fim laco for in');
