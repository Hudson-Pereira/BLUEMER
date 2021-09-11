const prompt = require('prompt-sync')();
/*Crie um jogo de ficção interativa que simule a rotina diária de um personagem. Você pode escolher entre rotinas matinais, 
rotinas de trabalho, rotinas de estudos, entre outras. A ideia do jogo é que o jogador faça as escolhas para o seu personagem 
e o conduza durante o seu dia. Cada escolha irá gerar uma consequência diferente para o seu personagem. O jogo acaba quando o 
dia do seu personagem acabar. Você será responsável por determinar o inicio e término do dia do seu personagem, além de avançar
 o tempo a cada escolha.É obrigatório o uso de orientação a objetos e herança, funções, laços (while/for) e condicionais 
 (if, elif, else), ou seja todo o conteúdo visto durante o módulo. Use toda sua criatividade para desenvolver uma história
  interessante e seja bem específico com relação as escolhas que precisam ser feitas, para que seu jogo seja divertido!
*/

//Rotina 

class Pessoa{ //classe das pessoas da vida

    constructor(nome, idade, genero, profissao, escolaridade){
      this.nome = '';
      this.idade = '';
      this.genero = '';
      this.profissao = '';
      this.escolaridade = ''; 
    };

    Acordar(){
      console.log('Você acordou bem esta manhã, parece que tudo vai correr bem.');
    };

    Soneca(){
      console.log('Huuuum, que preguiça. Você ficou mais um tempo na cama.')
    };

    Orar(){
      console.log('Muito bem, a melhor maneira de começar um dia é orando.');
      console.log("Em pensamento, você orou: 'Obrigado meu Deus, pela noite que se passou e pelo dia que se iniciou.'");
    };

    TomarCafe(){
      console.log('Muito bem, nada como um bom café da manhã. Aproveite.');
    };

    Sair(){
      console.log('Você saiu de casa pela porta da frente e encontrou seu vizinho.');
      console.log('Bom dia vizinho!!!');
      console.log(`Vizinho: 'Bom dia ${user.nome}.'`);
    };

    Ir(){
      console.log(`Seu amigo ${amigo1.nome} ficou muito feliz em estrear o jogo novo com você e mais alguns amigos.`);
    };

    NaoIr(){
      console.log(`Seu amigo ${amigo1.nome} insistiu: `);
      console.log(`Deixa de ser chato ${user.nome}, vamos lá. ${amigo2.nome} vai estar lá e ${amigo3.nome} também. Falta mais um para completar os jogadores.`);
    };

    Joystick(){
      console.log('Você pegou o joystick em suas mãos.');
    };

    NaoPegar(){
      console.log('Poxa cara, vamos lá, o jogo é da hora...');
    };

    PedirAjuda(){
      console.log("Então você pensou: 'Vou pedir ajuda'. Mas logo desistiu, imaginando que ninguém acreditaria em sua história.");
    };

    Help(){
      console.log('Você gritou: ');
      console.log('SOCORROOOOOOOOOOOOOOOO!!!!!!!!!!!!!');
    };
};

class Personagem { // classe dos personagens do jogo

    constructor(nome, especial, genero) {
      this.nome = nome;
      this.especial = especial;
      this.genero = genero;  
    };

    Pular(){
      console.log(`Você pulou sobre o ${obstaculo}.`);    
    };

    Bater(){
      console.log(`Você bateu no ${adversario}.`)
    };    

    Olhar(){
      console.log('Você olhou para os lados, para cima e para baixo, procurando por algo.');
    };

    Correr(){
      console.log('Você está correndo desesperadamente.')
    };

    Esconder(){
      console.log('Ufa! Ainda bem que encontrei esse esconderijo, senão já estaria perdido.');
    };

    Especial(){
      console.log('Você usou seu poder especial e causou um dano de 30%.');
      console.log(`Especial ${pnjUser.especial}.`)
    };
};

class Inimigo extends Personagem { //classe herdeira para o inimigo
    constructor(nome, especial, genero, vida){
      super(nome, especial, genero);
      this.vida = vida;
    };
};

class Game { // classe do video game
  
  constructor(nome, ano, tipo, players) {
    this.nome = nome;
    this.ano = ano;
    this.tipo = tipo;
    this.players = players;
  };

  Abduzir(){
    console.log('Começou a sair faíscas e fumaça do vídeo game.');
    console.log('O vídeo game abduziu os jogadores para dentro do jogo.');
  };

  Vencedor(){
    console.log('Seu jogo acabou. Você venceu. Parabéns.');
  };

  Perdedor(){
    console.log('GAME OVER');
  };

};
// Pessoas da vida real
const user = new Pessoa();
const amigo1 = new Pessoa();
const amigo2 = new Pessoa();
const amigo3 = new Pessoa();
// Personagens do jogo
const pnjUser = new Personagem ('Godzilla', 'Chamas', 'Humano');
const pnj1 = new Personagem ('Goku', 'Kamehameha', 'Sayajin');
const pnj2 = new Personagem ('Naruto', 'Rasengan', 'Ninja');
const pnj3 = new Personagem ('Freeza', 'Death', 'Alien');
const enemy = new Inimigo ('Gidorah', 'Raio', 'Monstro', 'Extra');
// video game
const jogo = new Game('Perdidos na floresta',2021,'Aventura', 4);
// Inicio do programa
console.log('======================================== Ficção Interativa =========================================');
console.log();
console.log('=======================================Perdidos na Floresta=========================================');


console.log('PIPIPIPI, PIPIPIPI, PIPIPIPI...');
console.log('Hora de acordar ....');
user.nome = prompt('Digite seu nome: ');
console.log(`Hora de acordar ${user.nome}.`);       





