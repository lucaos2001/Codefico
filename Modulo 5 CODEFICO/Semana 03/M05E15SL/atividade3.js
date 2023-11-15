const AnimalDeEstimacao = {
    nome : "Pantera",
    especie : "Cachorro",
    idade: 6,
    fazerBarulho: function () {
        console.log(`A ${this.nome} está latindo!`);
    },
    envelhecer: function () {
        this.idade += 1
    },
    trocarNome: function (novo) {
        this.nome = novo
    },
    
}

console.log(`Nome: ${AnimalDeEstimacao.nome}`);
console.log(`Especie: ${AnimalDeEstimacao.especie}`);
console.log(`Idade: ${AnimalDeEstimacao.idade}`);

AnimalDeEstimacao.fazerBarulho();

AnimalDeEstimacao.envelhecer();
AnimalDeEstimacao.envelhecer();

console.log(`A ${AnimalDeEstimacao.nome} está com ${AnimalDeEstimacao.idade} anos.`);

AnimalDeEstimacao.trocarNome("Negona");

console.log(`Nome: ${AnimalDeEstimacao.nome}`);
console.log(`Especie: ${AnimalDeEstimacao.especie}`);
console.log(`Idade: ${AnimalDeEstimacao.idade}`);
