const prompt = require("prompt-sync")();
let soma = 0
let numeros = 0

while (true){
    numero = parseInt(prompt("Digite o número: "));
    if(numero === 0){
        break;
    }
    soma += numero;
    numeros += 1;
}

let media = soma / numeros;

console.log(media);