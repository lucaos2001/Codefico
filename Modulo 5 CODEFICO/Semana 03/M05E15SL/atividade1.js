var hoje = new Date(); // Obtém a data e hora atual

var hora = hoje.getHours();

console.log(hora);

horario = function(hora){
    if(hora >= 6 && hora <= 12){
        return ("Bom Dia");
    } else if(hora > 12 && hora <= 18) {
        return("Boa Tarde");
    } else {
        return("Boa Noite");
    }
}
//Implementei essa função que faz com que a saudação da pessoa2 seja de acordo com o horário do dia


const Pessoa = {}
Pessoa.nome = "Lucas";
Pessoa.idade = 22;

console.log(`Nome: ${Pessoa.nome}\nIdade: ${Pessoa.idade}`)

Pessoa.idade = 23
console.log("Idade atualizada com sucesso!!")
console.log("Idade:", Pessoa.idade)

const Pessoa2 = {
    nome: "Jubiscleisson",
    idade: 34,
}

for(let p in Pessoa2){
    console.log(`${p}: ${Pessoa2[p]}`);
}

Pessoa2.apresentacao = function() {
    console.log(`${horario(hora)}, o meu nome é ${this.nome} eu tenho ${this.idade} anos`);
}

Pessoa2.apresentacao();

Pessoa.email = "email@email.com";

console.log(Pessoa.email);

