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

    Levantar(){
      console.log('Você acordou bem esta manhã, parece que tudo vai correr bem.');
      console.log();
    };

    Soneca(){
      console.log('Huuuum, que preguiça. Você ficou mais um tempo na cama.')
      console.log('Se passaram 5 min, agora você tem que se levantar, ou irá atrasar seu dia.');
      console.log();
    };

    Orar(){
      console.log('Muito bem, a melhor maneira de começar um dia é orando.');
      console.log("Em pensamento, você orou: 'Obrigado meu Deus, pela noite que se passou e pelo dia que se iniciou.'");
      console.log();
    };

    NaoOrar(){
      console.log('Ok, vamos sem orar então.');
      console.log();
    };

    TomarCafe(){
      console.log('Muito bem, nada como um bom café da manhã. Aproveite.');
      console.log();
      
    };

    NaoTomar(){
      console.log();
      console.log(`Mãe:
        Vem logo menino, não sabe que o café da manhã é a refeição mais importante do dia!!!!`)
      console.log();
      this.TomarCafe();
    };

    Ficar(){
      console.log('Você decidiu ficar em casa e não sair.');
      console.log();
      console.log('30 min depois...');
      console.log()
      console.log('Você ficou entediado e saiu para rua.');
      console.log();
      this.Sair();
    };

    Sair(){
      console.log();
      console.log(`Você saiu de casa pela porta da frente e encontrou seu(sua) amigo(a)...
                  Qual nome dele(a) mesmo?`);
      amigo1.nome = prompt('Digite o nome: ').toUpperCase();
      console.log(`Ah sim, ${amigo1.nome}.
                  ${user.nome}: Bom dia ${amigo1.nome}!!!
                  ${amigo1.nome}: 'Bom dia ${user.nome}.`);
      console.log();
    };

    Ir(){
      console.log(`Seu amigo ${amigo1.nome} ficou muito feliz em estrear o jogo novo com você e mais alguns amigos.`);
      console.log();
    };

    NaoIr(){
      console.log(`Seu amigo ${amigo1.nome} insistiu: `);
      console.log(`Deixa de ser chato(a) ${user.nome}, vamos lá. Já estamos em 3. Falta mais um para completar os jogadores.
                    Depois de muita insistencia você aceitou e foi com ele(a)`);
      console.log();
      this.Ir();
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
var user = new Pessoa();
var amigo1 = new Pessoa();
var amigo2 = new Pessoa();
var amigo3 = new Pessoa();
// Personagens do jogo
const pnjUser = new Personagem ('Godzilla', 'Chamas', 'Humano');
const pnj1 = new Personagem ('Goku', 'Kamehameha', 'Sayajin');
const pnj2 = new Personagem ('Naruto', 'Rasengan', 'Ninja');
const pnj3 = new Personagem ('Freeza', 'Death', 'Alien');
const enemy = new Inimigo ('Gidorah', 'Raio', 'Monstro', 'Extra');
// video game
const jogo = new Game('Perdidos na floresta',2021,'Aventura', 4);

// funcoes

function erro(){
  console.log('Escolha uma das duas opções.');
};

function invalida(){
  console.log('Opção inválida.');
};
// Inicio do programa
console.log('======================================== Ficção Interativa =========================================');
console.log();
console.log('=======================================Perdidos na Floresta=========================================');


console.log(`PIPIPIPI, PIPIPIPI, PIPIPIPI...
            Hora de acordar ....
            Qual seu nome mesmo?`);
user.nome = prompt('Digite seu nome: ').toUpperCase();

console.log(`Ah sim, lembrei.
            Hora de acordar ${user.nome}.`)


while (true){ 

  var desperta = prompt('Vai levantar ou tirar mais uma soneca?(Responda com L para levantar ou S para soneca)').toLowerCase();       
    if (desperta[0] == 's' || desperta[0] == 'l') {
      break;
    } else {
      invalida();
    };
};
    if (desperta[0] == 'l') {
      user.Levantar();
    } else if (desperta[0] == 's') {
      user.Soneca();
    } else {
      erro();
    };


while (true) {

  var orar = prompt('Antes de realmente se levantar, que tal uma oração?(Responda com S para sim ou N para não.)').toLowerCase();
    if (orar[0] == 's' || orar[0] == 'n'){
      break;
    } else {
      invalida();
    };
};
    if (orar[0] == 's') {
      user.Orar();
    } else if (orar[0] == 'n') {
      user.NaoOrar();
    } else {
      erro();
    };
 

console.log(`Sua mãe te gritou: ${user.nome}, venha tomar café...`);

while(true) {

  var cafe = prompt('Tomar café?(Responda com S para sim ou N para não)').toLowerCase();
    if (cafe[0] == 's' || cafe[0] == 'n'){
      break;
    } else {
      invalida();
    };
};
    if (cafe[0] == 's') {
      user.TomarCafe();
    } else if (cafe[0] == 'n') {
      user.NaoTomar();
    } else {
      erro();
      cafe = prompt('Tomar café?').toLowerCase();
    };

while(true) {

  var sair = prompt('Agora você tem que decidir se vai sair ou ficar em casa.(Digite S para sair ou F para ficar)').toLowerCase();
    if (sair[0] == 's' || sair[0] == 'f') {
      break;
    } else {
      invalida();      
    };
};
    if (sair[0] == 's') {
      user.Sair();
    } else if (sair[0] == 'f') {
      user.Ficar();
    } else {
      erro();
    };
  
console.log(`${amigo1.nome} te chamou para jogar um novo jogo em sua casa.`);

while(true) {
  var ir = prompt('Ir ou nao ir?(Responda com I para ir ou N para não ir)');
    if (ir[0] == 'i' || ir[0] == 'n') {
      break;
    } else {
      invalida();
   };
};
    if (ir[0] == 's') {
      user.Ir();
    } else if (ir[0] == 'n') {
      user.NaoIr();
    } else {
      erro();
    };