const express = require("express");//importa modulo express
const path = require("path");

const app = express();//instancia uma referencia do express no projeto
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send("Hello world");
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

app.get("/details", (req, res) => {
    const conteudos = ["Nome","Tipo","Altura","Peso"]
    res.render("details", { conteudos: conteudos });
});


//liga o servidor na porta 3000
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
