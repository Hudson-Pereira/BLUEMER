const express = require("express");//importa modulo express
const path = require("path"); //importando path

const app = express();//instancia uma referencia do express no projeto
const port = 3000;

app.set("view engine", "ejs"); // set engine para trabalhar com EJS
app.use(express.static(path.join(__dirname, "public"))); //set public como raiz
app.use(express.urlencoded());

//variaveis
let pokemons = [{img: "/img/charmander.jpg", num:"001", name: "Charmander",type: "Fogo",desc: "Descricao", alt: "0.6",peso: "8.5", hab:"Chamas"}];
let message = "";
// app.get("/", (req, res) => {
//     res.send("Hello world uhuuuu");
// });

app.get("/", (req, res) => {
    
    const poke = pokemons;
    res.render("index", {poke: poke});
});

app.get("/test", (req, res) => {
    res.render("test", { test: "Hudson" });
});

app.get("/cadastro", (req, res) => {
    res.render("cadastro");    
});

app.get("/detail", (req, res) => {
    const conteudos = {img: "/img/charmander.jpg", num:"001", name: "Charmander",type: "Fogo",desc: "Descricao", alt: "0.6",peso: "8.5", hab:"Chamas"}
    
    const props = Object.keys(conteudos);
    
    res.render("detail", { pokedados: conteudos, props: props});
});

app.post("/details", (req, res) => {
    
    const {imagem, name, num, type, desc, hab, alt, peso} = req.body;

    const pokedados = {img: imagem, name: name, num: num, type: type, desc: desc, hab: hab, alt: alt, peso: peso};
    
    pokemons.push(pokedados);

    const props = Object.keys(pokedados);
    
    console.log(pokemons);
    res.render("details", {pokemons: pokemons});
});

app.get("/formulario", (req, res) => {
        setTimeout(() => {
        message = "";
    }, 2000);

    res.render("formulario", {message});
});

app.post("/recebeform", (req,res) => {
    const {nome, email, senha} = req.body; // recuperando via http post
    message = `Usuário ${nome} cadastrado com sucesso. Um e-mail de confirmação foi enviado para ${email}.`;
     
   
    res.redirect("/formulario");   
    // res.render("recebeform", infor); //renderizando e usando o JSON para exibir na tela
});


//liga o servidor na porta 3000
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
