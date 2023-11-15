const prompt = require("prompt-sync")();

let imprimir = prompt("Deseja imprimir um retângulo?(s/n)");
let impressao = imprimir.toLowerCase();

while(impressao === "s"){

    while(true){
        let a = parseInt(prompt("Informe a altura: "));
        let l = parseInt(prompt("Informe a largura: "));
        if (a === 0 || l === 0){
            console.log('Entrada inválida, um dos valores é 0');
        } else if (l < a){
            console.log('Entrada inválida, a largura não pode ser menor que a altura.');
        } else {
            for(let i = 0; i < a; i++){
                let linha = '*'.repeat(l);
                console.log(linha);
            }
            break;
        }
    }    

    let imprimir = prompt("Deseja imprimir outro retângulo?(s/n)");
    let impressao = imprimir.toLowerCase();

    if(impressao === "n"){
        console.log("Saindo do programa...");
        break;
    }      
}

