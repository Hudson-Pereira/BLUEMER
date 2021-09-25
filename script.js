
function user(){

    const name = document.querySelector("#name").value;
    const p = document.querySelector("#user");

        if(name == "" ) {
            alert("Digite seu nome.");
        } else {
            p.textContent = `Olá ${name}.`;  
            var sec = document.querySelector("#projetos");
                  
            sec.style.display = "flex"; //mudando o style do item          
        };
    
        
            
        
        
};