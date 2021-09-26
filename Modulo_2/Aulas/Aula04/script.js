// window.onload = alert('Oi');
function sec1(){
    var sec = document.querySelector("#IMC");

    if (sec.style.display === "none") {
        sec.style.display = "flex";
    } else {
        sec.style.display = "none"
    };
};

function sec2(){
    var sec = document.querySelector("#Listas");

    if (sec.style.display === "none") { // verificando o style do item
        sec.style.display = "flex"; //mudando o style do item
    } else {
        sec.style.display = "none"
    };
};

function dado(){
    const name = document.querySelector("#nome").value;
    const age = document.querySelector("#idade").value;
    const data = document.querySelector("#dados");
    const peso = document.querySelector("#peso").value;
    const alt = document.querySelector("#altura").value;

    if (name == "" || age == "" || peso == "" || alt == ""){
        alert("Preencha todos os campos corretamente.");
    } else {
    const res = peso / (alt * alt); 

    data.textContent = `Oi ${name}, que tem ${age} anos. Seu IMC é ${res.toFixed(2)}.`; //modificando o texto do item
    };
};

    const btn = document.querySelector("#btn");
    
    btn.addEventListener("click", function(){
    const tarefa = document.querySelector("#task").value;
        if(tarefa == "") {
            alert("O campo tarefa não pode ficar em branco.");
        } else {
        const li = document.createElement("li"); //criando li da lista
        const tarefa = document.querySelector("#task").value;

        const taskText = document.createTextNode(tarefa); //criando o texto na variavel
        li.appendChild(taskText); //add o texto na lista

        document.querySelector("#tasks").appendChild(li); // add a lista na ul
        document.querySelector("#task").value = ""; //zerando o campo
        };
});