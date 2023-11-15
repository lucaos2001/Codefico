const prompt = require("prompt-sync")();

while(true){
    let nomeUsuario = prompt("Digite o nome de usuário: ");

    if(nomeUsuario.length >= 12){
        nomeUsuario = nomeUsuario.toLowerCase();
        if(nomeUsuario.indexOf("@") === -1){
            console.log("ERRO! Usuarios devém conter '@' no seu nome");
        }
        
        if(nomeUsuario.indexOf("admin") !== -1){
            console.log("ERRO! Usuarios não devém conter admin no seu nome");        
        } else if(nomeUsuario.indexOf("user") !== -1){
            console.log("Nome válido");
            console.log(`Seu nome de usuário é: ${nomeUsuario}`);
            break;
        }



    } else {
        console.log("ERRO! O nome deve ter pelo menos 12 caracteres");
    }


}
