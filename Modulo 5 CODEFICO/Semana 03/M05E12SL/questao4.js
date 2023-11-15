const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Digite um número inteiro positivo: "))

if (numero > 0) {
    switch (numero) {
        case 1:
            console.log("Sequencia de Fibonacci até 1: 0");
            break;
        case 2:
            console.log("Sequencia de Fibonacci até 2: 0, 1");
            break;
        default:
            let primeiro = 0;
            let segundo = 1;
            let resultado = "0, 1";
            for (let i = 3; i <= numero; i++) {
                let terceiro = primeiro + segundo;
                resultado += `, ${terceiro}`;
                primeiro = segundo;
                segundo = terceiro;
            }
            console.log(`Sequência de Fibonacci até ${numero}: ${resultado}`);
            break;
    }
} else {
    console.log("Nenhum número na sequência");
}
