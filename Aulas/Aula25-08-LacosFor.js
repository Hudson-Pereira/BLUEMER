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

let num = [0,1,2,23,5]
for (let i in num){
    console.log(i);
};
console.log('fim laco for in');

console.log('Inicio laco for of');

for (let i of num){
    console.log(i);
};
console.log('fim laco for of');

console.log('Inicio lado for each');

    let numeros = [0,1,2,3,4,5,6,7,8,9,10];

    function tabuadaDo2(item){
        console.log(item*2);
    };

    numeros.forEach(tabuadaDo2);

console.log('Fim laco for each');