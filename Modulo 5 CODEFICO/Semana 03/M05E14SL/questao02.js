let numeros = [1, 2, 7, 14, 5, 0, 10, 23, 13, 17, 8, 19];


//1
function ehPrimo(numero){
    if(numero<=1) return false;
    for(let i = 2; i < numero; i++){
        if(numero%i === 0){
            return false;
        }
    }
    return true;
}


//2
let NumerosPrimos = numeros.filter(ehPrimo);
console.log("Números Primos:", NumerosPrimos);


//3
let quadradosDosPrimos = NumerosPrimos.map(numero => numero **2);
console.log("Quadrado dos números primos:", quadradosDosPrimos);
