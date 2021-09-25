const Btn = document.querySelector("#btn");
const nPers = document.querySelector("#nPers");
const pers = document.querySelector("#pers");
// var rouge = document.querySelector("#pers");
// window.onload = alert(nPers);
Btn.addEventListener("click", function(){

    if (nPers.textContent == "Sonic") {
    nPers.textContent = "Tails";
    pers.src = "../Projeto1/images/Tails-min.png";
    } else if (nPers.textContent == "Tails") {
        nPers.textContent = "Rouge";
        pers.src = "../Projeto1/images/Rouge.png"; 
    } else if (nPers.textContent == "Rouge"){
        nPers.textContent = "Knuckles";
        pers.src = "../Projeto1/images/knuckles.png";
    } else if (nPers.textContent == "Knuckles"){
        nPers.textContent = "Amy Rose";
        pers.src = "../Projeto1/images/Amy_Rose.png";
    } else if (nPers.textContent == "Amy Rose"){
        nPers.textContent = "Sticks";
        pers.src = "../Projeto1/images/Sticks.png";
    } else if (nPers.textContent == "Sticks"){
        nPers.textContent = "Shadow";
        pers.src = "../Projeto1/images/Shadow.png";
    } else if (nPers.textContent == "Shadow"){
        nPers.textContent = "Unleashed";
        pers.src = "../Projeto1/images/unleashed.png";
    } else if (nPers.textContent == "Unleashed"){
        nPers.textContent = "Turma";
        pers.src = "../Projeto1/images/turma.png";
    }else {
        nPers.textContent = "Sonic";
        pers.src = "../Projeto1/images/Sonic.png";
    };
});

// Btn.addEventListener("click", function() {
//     nPers.textContent = "Rouge";
//     rouge.src = "../Projeto1/images/Rouge.png";
// });
