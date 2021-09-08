const prompt = require('prompt-sync')();

class Filmes{

    constructor(){
        this.titulo = '';
        this.ano = 0;
        this.genero = '';
        this.diretor = '';
        this.atores = [''];
        this.duracao = 0;
    };

    Reproduzir() {

        console.log('Reproduzindo o filme escolhido. |>')
    };

    Pausar() {

        console.log('Filme pausado ||');
    };

    Avancar() {

        console.log('Avançar >>')
    };

    Fechar() {

        console.log('Fechando player. X');
    };
};

let click = new Filmes();
click.titulo = 'Click';
click.ano = 2006;
click.genero = 'Comédia';
click.diretor = 'Fulano de Tal';
click.atores = ['Adam Sandler','Jennifer Anniston'];
click.duracao = 107;

console.log(click);
click.Reproduzir();
click.Pausar();
click.Avancar();
click.Fechar();
