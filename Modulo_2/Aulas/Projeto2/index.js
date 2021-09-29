const express = require("express");//importa modulo express
const path = require("path"); //importando path

const app = express();//instancia uma referencia do express no projeto
const port = 3000;

app.set("view engine", "ejs"); // set engine para trabalhar com EJS
app.use(express.static(path.join(__dirname, "public"))); //set public como raiz
app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.send("Hello world uhuuuu");
});

app.get("/index", (req, res) => {
    const conteudos = ["Nome","Tipo","Altura","Peso"]
    res.render("index", { titulo: "Pokédex", conteudos: conteudos });
});

app.get("/test", (req, res) => {
    res.render("test", { test: "Hudson" });
});

app.get("/cadastro", (req, res) => {
    res.render("cadastro");    
});

app.post("/details", (req, res) => {
    // const conteudos = [{img: "/img/charmander.jpg", num:"001", name: "Charmander",type: "Fogo",desc: "Descricao", alt: "0.6",peso: "8.5", hab:"Chamas"}]
    const {imagem, name, num, type, hab, alt, peso} = req.body;

    res.send({imagem: imagem, name: name, num: num, type: type, hab: hab, alt: alt, peso: peso});
});

app.get("/formulario", (req, res) => {
    res.render("formulario");
});

app.post("/recebeform", (req,res) => {
    const {nome, email, senha} = req.body;

    res.send({nome: nome, email: email, senha: senha});
});


//liga o servidor na porta 3000
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
