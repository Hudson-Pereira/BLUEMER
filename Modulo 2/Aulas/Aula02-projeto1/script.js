const Btn = document.querySelector("#btn");
const nPers = document.querySelector("#nPers");
const pers = document.querySelector("#pers");
// var rouge = document.querySelector("#pers");
// window.onload = alert(nPers);
Btn.addEventListener("click", function(){

    if (nPers.innerText == "Sonic") {
    nPers.innerText = "Tails";
    pers.src = "../Aula02-projeto1/images/Tails-min.png";
    } else if (nPers.innerText == "Tails") {
        nPers.innerText = "Rouge";
        pers.src = "../Aula02-projeto1/images/Rouge.png"; 
    } else if (nPers.innerText == "Rouge"){
        nPers.innerText = "Knuckles";
        pers.src = "../Aula02-projeto1/images/knuckles.png";
    } else if (nPers.innerText == "Knuckles"){
        nPers.innerText = "Amy Rose";
        pers.src = "../Aula02-projeto1/images/Amy_Rose.png";
    } else if (nPers.innerText == "Amy Rose"){
        nPers.innerText = "Sticks";
        pers.src = "../Aula02-projeto1/images/Sticks.png";
    } else if (nPers.innerText == "Sticks"){
        nPers.innerText = "Shadow";
        pers.src = "../Aula02-projeto1/images/Shadow.png";
    } else if (nPers.innerText == "Shadow"){
        nPers.innerText = "Unleashed";
        pers.src = "../Aula02-projeto1/images/unleashed.png";
    } else if (nPers.innerText == "Unleashed"){
        nPers.innerText = "Turma";
        pers.src = "../Aula02-projeto1/images/turma.png";
    }else {
        nPers.innerText = "Sonic";
        pers.src = "../Aula02-projeto1/images/Sonic.png";
    };
});

// Btn.addEventListener("click", function() {
//     nPers.innerText = "Rouge";
//     rouge.src = "../Aula02-projeto1/images/Rouge.png";
// });
