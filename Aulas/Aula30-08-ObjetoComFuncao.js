//Objeto com funcao

let pessoa = {
    nome : 'Hudson Oliveira Pereira',
    idade : 29,
    genero : 'Masculino',
};

pessoa.interesses = ['Dinheiro','Fama','Carreira','Familia'];

console.log(pessoa);

pessoa.bio = function(){
    return `Meu nome é ${this.nome}, tenho ${this.idade}, sou do sexo ${this.genero} e meus interesses são: ${this.interesses[0]}, ${this.interesses[1]}, ${this.interesses[2]} e ${this.interesses[3]}.`;
};

console.log(pessoa.bio());