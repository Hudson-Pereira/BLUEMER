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

    constructor(nome){
      this.nome = '';
 
    };

    Levantar(){
      sleep(2000);
      console.log('Você acordou bem esta manhã, parece que tudo vai correr bem.');
      console.log();
    };

    Soneca(){
      console.log('Huuuum, que preguiça. Você ficou mais um tempo na cama.')
      sleep(4000);
      console.log('Se passaram 5 min, agora você tem que se levantar, ou irá atrasar seu dia.');
      console.log();
    };

    Orar(){
      sleep(2000);
      console.log('Muito bem, a melhor maneira de começar um dia é orando.');
      sleep(2000);
      console.log("Em pensamento, você orou: 'Obrigado meu Deus, pela noite que se passou e pelo dia que se iniciou.'");
      console.log();
    };

    NaoOrar(){
      sleep(2000);
      console.log('Ok, vamos sem orar então.');
      console.log();
    };

    TomarCafe(){
      sleep(2000);
      console.log('Muito bem, nada como um bom café da manhã. Aproveite.');
      console.log();
      
    };

    NaoTomar(){
      console.log();
      sleep(2000);
      console.log(`Mãe:
        Vem logo menino, não sabe que o café da manhã é a refeição mais importante do dia!!!!`)
      console.log();
      sleep(2000);
      this.TomarCafe();
    };

    Ficar(){
      sleep(2000);
      console.log('Você decidiu ficar em casa e não sair.');
      console.log();
      sleep(2000);
      console.log('30 min depois...');
      sleep(2000);
      console.log()
      console.log('Hora de ir a escola.')
//      console.log('Você ficou entediado e saiu para rua.');
//      console.log();
//      this.Sair();
    };

    Sair(){
      console.log();
      sleep(2000);
      console.log(`Você saiu de casa pela porta da frente e encontrou seu(sua) amigo(a)...`)
      sleep(2000);
      console.log('........');
      sleep(2000);
      console.log('Qual nome dele(a) mesmo?');
      amigo1.nome = prompt('Digite o nome: ').toUpperCase();
      sleep(2000);
      console.log(`Ah sim, ${amigo1.nome}.
                  ${user.nome}: Bom dia ${amigo1.nome}!!!
                  ${amigo1.nome}: Bom dia ${user.nome}.`);
      console.log();
    };

    Ir(){
      sleep(2000);
      console.log(`Seu amigo ${amigo1.nome} ficou muito feliz em estrear o jogo novo com você e mais alguns amigos.`);
      console.log();
    };

    NaoIr(){
      sleep(2000);
      console.log(`Seu amigo ${amigo1.nome} insistiu: `);
      console.log(`Deixa de ser chato(a) ${user.nome}, vamos lá. Já estamos em 3. Falta mais um para completar os jogadores.`);
      console.log();
      sleep(3000);
      console.log('Após muita insistência você aceitou e foi.')
      console.log();
      sleep(2000);
      this.Ir();
    };

    Indagar(){
      sleep(2000);
      console.log(`${user.nome}: Pessoal, vocês sentiram algo estranho?
                  ${amigo2.nome}: Você está louco? Tomou café hoje?
                    TODOS: KKKKKKKKKKKKKKKKK`);
    };

    Joystick(){
      sleep(2000);
      console.log('Você pegou o joystick em suas mãos.');
      sleep(2000);
      console.log()
      console.log('Logo pensou:')
      sleep(2000)
      console.log('"Nossa, que sensação estranha..."');
    };

    NaoPegar(){
      sleep(2000);
      console.log(`Poxa cara, vamos lá, o jogo é da hora...
                    Mas você quem sabe, fique só olhando então...`);
      sleep(2000);
      console.log();
      console.log(`${user.nome}: Tá bom vai. Vamos jogar...`);
      sleep(2000);
      console.log();
      user.Joystick();
    };

    Help(){
      sleep(2000);
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

function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
};
// Inicio do programa
console.log('======================================== Ficção Interativa =========================================');
console.log();
console.log('=======================================Perdidos na Floresta=========================================');


console.log(`PIPIPIPI, PIPIPIPI, PIPIPIPI...
            Hora de acordar ....`);
sleep(2000);
console.log('.......')
sleep(2000);            
console.log('Qual seu nome mesmo?');
user.nome = prompt('Digite seu nome: ').toUpperCase();
sleep(2000);
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
//Primeira opcao
    if (sair[0] == 's') {
      console.clear();
      console.log(`Era para você ir a escola. Como saiu de casa antes, você não foi.
                    Como toda escolha, essa terá uma consequência`);
      user.Sair();
      console.log();
      sleep(2000);
      
      console.log(`${amigo1.nome} te chamou para jogar um novo jogo em sua casa.`);
        while(true) {
          var jogar = prompt('Jogar?(Responder com S para sim ou N para não)' ).toLowerCase();
            if(jogar[0] == 's' || jogar[0] == 'n') {
              break;
            } else {
              invalida();
            };
        };
        if  (jogar[0] == 's') {
          user.Ir();
        } else if (jogar[0] == 'n') {
          user.NaoIr();
        } else {
          erro();
        };

        console.log(`Vocês chegaram a casa de ${amigo1.nome}, e lá já estavam esperando na porta mais dois amigos...
                    Quais seus nomes? `);
          amigo2.nome = prompt('Digite o nome do(a) segundo(a) amigo(a): ').toUpperCase();
          amigo3.nome = prompt('Digite o nome do(a) terceiro(a) amigo(a): ').toUpperCase();
        sleep(2000);
        console.log(`Agora a turma está completa: 
                    ${user.nome}
                    ${amigo1.nome}
                    ${amigo2.nome}
                    ${amigo3.nome}
                    Todos foram estrear o jogo novo.`);
        console.log();
        console.log(`Chegando na casa de ${amigo1.nome}, você sentiu algo estranho.`);
        console.log();
        let subir = prompt('Indagar ou não?(Pressione I se quiser indagar.)').toLowerCase();
          if (subir == 'i'){
            user.Indagar();
            console.log();
          } else {
            sleep(2000);
            console.log('Mas não deu muita importância.');
          };
        sleep(3000);
        console.log(`Todos subiram para o quarto, onde logo viram o jogo ligado.
                      ${amigo1.nome}: O jogo já está no ponto.`);
        console.log();
        sleep(2000);
        console.log(`Na tela da televisão você viu as informações do jogo:`);
        console.log();
          
          let tela = Object.keys(jogo);
        sleep(2000);  
          for (let i = 0; i < tela.length; i++) {
            sleep(1000);
            console.log(`${tela[i]}: ${jogo[tela[i]]}`);
            console.log();
          };
          sleep(2000);
    console.log(`${amigo1.nome}: Esse jogo é lançamento e exclusivo, recebi pelo correio para testar.
                Nem sei quem mandou, mas parece ser maneirasso.
                Ainda me mandaram mais 2 controles para interar os participantes.
                Bora jogar gente.`);
      sleep(2000);
      while (true) {
        var pegar = prompt('Responda com S para sim ou N para não.').toLowerCase();
          if(pegar[0] == 's' || pegar[0] == 'n'){
            break;
          } else {
            invalida();
          };
      };
        if (pegar[0] == 's') {
          user.Joystick();
        } else if (pegar[0] == 'n') {
          user.NaoPegar();
        } else {
          erro();
        };
  sleep(2000);
  console.log('De repente, o video game começou a sair fumaça e faíscas');
  sleep(1500);
  console.log(`${amigo2.nome}: Que isso ${amigo1.nome}? Efeitos especiais em 10D. kkkkkkkkkkkk`);
  console.log(`${amigo3.nome}: kkkkkkkkkkkk`);
  sleep(3000);
  console.log('Quando de repente, seus amigos foram puxados um a um para dentro do jogo, como se estivessem se dissolvendo.');
  sleep(2000);
  user.Help();
  sleep(2000);
  console.log('E também foi puxado para o jogo.');   
  sleep(2000);
  console.clear();
        for (let i = 0;i<17;i++){
          sleep(8000);
          console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
          sleep(8000);
          console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
        };
  console.clear();
  sleep(2000);
  console.log('Você e seus amigos se viram em um lugar estranho, não parecia real.');
  sleep(2000);
  console.log(`${user.nome}: Onde estamos?
              ${amigo3.nome}: ${amigo1.nome}, o que você fez com a gente?
              ${amigo2.nome}: Nossa, que lugar é esse?
              ${amigo1.nome}: Será que estamos no jogo? Esse lugar parece muito com a capa do jogo....`);






      
//Segunda opcao
    } else if (sair[0] == 'f') {
      user.Ficar();
      console.log(`Você está se arrumando para ir a escola.
                    Como toda escolha, essa terá uma consequência`);
      sleep(2000);
      console.log();
    } else {
      erro();
    };
  




  