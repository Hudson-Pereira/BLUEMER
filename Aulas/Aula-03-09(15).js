const prompt = require('prompt-sync')();

/* Simulador de dados de um cassino. */
//classes = 'fábricas de objetos'
///atributos = características dos objetos.
////métodos = ações que o objeto podem executar.

// Dica do pai: como boa prática, as classes inicial com letra maiúscula.

class Dado{         //modelo de objeto

    //Dentro do método construtor, eu coloco os atributos.
    constructor(faces){
    this.faces = faces; //Auto-incremento.

    };

    // função em JS para gerar um número aleatório.
    GetRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() *(max - min+1))+ min;
    };
//Metodo é criado dentro da classe.
    Rolar(){
        console.log(`Resultado do dado: ${this.GetRandomIntInclusive(1,this.faces)}.`);
    };

};

//Instanciando (criando) os dados

let d6 = new Dado(6) //cria dado de 6 faces
d6.Rolar();

let d55 = new Dado(55);
d55.Rolar();

let d12 = new Dado(12);
d12.Rolar();