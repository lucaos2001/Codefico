const prompt = require("prompt-sync")();

let n1 = parseInt(prompt("Digite o primeiro número: "));
let n2 = parseInt(prompt("Digite o segundo número: "));
let resultado = 0;

for(let i = 0; i < n1; i++){
    resultado += n2;
}

console.log(resultado);