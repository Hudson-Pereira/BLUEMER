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
