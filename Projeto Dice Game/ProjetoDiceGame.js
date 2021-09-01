const prompt = require('prompt-sync')();
/*Utilizando os conceitos aprendidos até objetos, crie um programa onde jogadores joguem um dado e 
tenham resultados aleatórios.


O programa tem que:

• Perguntar quantas rodadas você quer fazer; (1,0 ponto) ok
• Perguntar quantos jogadores vão jogar; (1,5 pontos) ok
• Criar um objeto pra cada jogador com nome e número tirado; (1,5 pontos) ok
• Guarda todos os objetos em uma lista; (2,0 pontos) ok
• Ordenar esses objetos, sabendo que o vencedor tirou o maior número
no dado. (2,0 pontos) 
• Mostrar no final qual jogador ganhou mais rodadas e foi o grande
campeão. (2,0 pontos) 

 Math.floor(Math.random() * 4 + 1);// <var> = num inteiro(num aleatorio()) de 1 a 3
*/

let rod = +prompt('Quantas rodadas vao ser jogadas? ');
    if (rod == 0){
        console.log('Vá caçar o que fazer e deixe algugém jogar.');
        console.log('Tchau!');
    } else {
        let dice = rod; //pega o numero de rodadas
        let players = +prompt('Quantas pessoas vao jogar? ');
            if (players == 0){
                console.log('Vá caçar o que fazer e deixe algugém jogar.');
                console.log('Tchau!');
                } else {
                let listaTotal = [];
                let info = players; // pega o numero de jogadores
                    for (let i=1;i<= dice;i++){ 
                        console.log();
                        console.log(`Rodada ${i}`); //numerando a rodada 
                        let listaObjetos = [];   
                        for (let i=1;i<=info;i++){ 
                            
                            let nome ={name: `Jogador${i}`}; //criando o objeto jogador por numero de jogadores
                            nome.dado = Math.floor(Math.random() * 6 + 1); //gerando numero no dado e colocando no objeto
                            //console.log(nome);
                            console.log(`${nome.name}: ${nome.dado} pontos.`); //mostra o objeto com nome e numero
                            listaObjetos.push(nome); //joga na lista o objeto gerado
                            
                            };
                            
                        console.log();
                        listaTotal.push(listaObjetos);
                        //console.log(listaObjetos);
                        
                    };
                    
                    console.log('PONTUAÇÃO');
                    let cont = listaTotal.length;
                    for(let i =0;i<cont;i++){
                        console.log(`Rodada ${i+1}`);
                        console.log(listaTotal[i]);
                    };

                    console.log('CLASSIFICAÇÃO');
                    
                };
            };
        
        