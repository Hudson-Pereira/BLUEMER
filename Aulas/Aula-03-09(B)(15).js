const prompt = require('prompt-sync')();
//herança -> temos a classe mãe e a classe filha
//a classe filha herda(receba) tudo o que tem na mãe

class Animal{
    constructor(nome, idade, preco) {
        this.nome = nome;
        this.idade = idade;
        this.preco = preco;
    };

    ChecarEstoque(){
        return 10;
    };

};
//a classe MAE sempre vem DEPOIS de extends
class Cao extends Animal {

    constructor(nome, idade, preco, raca, peso){
        super(nome, idade, preco); //obrigatorio colocar o SUPER para reutilizar esses atributos.
        this.raca = raca;
        this.peso = peso;
    };

    Latir(){
        console.log('Au,au...')
    };
};

let dog = new Cao('Hudson',15,100,'Pug',2);
console.log(dog);
dog.Latir();

console.log(dog.ChecarEstoque());