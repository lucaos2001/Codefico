const prompt = require("prompt-sync")();

while(true){
    let texto = prompt("Digite um texto: ");

    let tamanho = texto.length;
    let invertido = "";

    for(let i = tamanho-1; i >= 0; i--){
        invertido += texto[i];
    }

    console.log(invertido);

    let verifica = prompt("Deseja inverter outra palavra?(s/n): ");
    let verificar = verifica.toLowerCase();
    if(verificar === "n"){
        console.log("Saindo do programa...");
        break;
    } else {
        continue;   
    }
}

















