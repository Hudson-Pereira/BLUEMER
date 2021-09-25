
function user(){

    const name = document.querySelector("#name").value;
    const p = document.querySelector("#user");
        if(name.textContent == "" ) {
            alert("Digite seu nome.");
        } else {
            p.textContent = `Olá ${name}.`;            
        };
    
        var sec = document.querySelector("#projetos");
        
            if (sec.style.display === "none") { // verificando o style do item
                sec.style.display = "flex"; //mudando o style do item
            } else {
                sec.style.display = "none"
            };
        
        
};