//do while

let resultado = ''; //recebe como string. Se for numero tem que converter depois.
let h = 0;

while (h < 8){ ///enquanto minha condicao for satisfeita, faca a acao.

    h +=1;
    resultado += h;

    console.log(resultado);
};
////////////////////////////////////////////////////////
let resultado2 = '';
let h2 = 0;

do {    // faca a acao enquanto minha condicao for satisfeita.

    h2 +=1;
    resultado2 += h2;

} while (h2 < 5); //testa a condicao no final, ou seja, ela nao entra na acao.

console.log(resultado2);
////////////////////////////////////////////////////
while (h2 < 5){
    resultado2 += h2;
    h2 +=1;
};
console.log(resultado2);
