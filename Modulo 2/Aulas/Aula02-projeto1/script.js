const Btn = document.querySelector("#btn");
const nPers = document.querySelector("#nPers");
const tails = document.querySelector("#pers");
const rouge = document.querySelector("#pers")

Btn.addEventListener("click", function() {
    nPers.innerText = "Tails";
    tails.src = "../Aula02-projeto1/images/Tails.png";
});

Btn.addEventListener("click", function() {
    nPers.innerText = "Rouge";
    rouge.src = "../Aula02-projeto1/images/Rouge.png";
});
