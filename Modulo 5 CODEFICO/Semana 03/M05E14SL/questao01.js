let tarefas = [
    "Estudar JavaScript",
    "Fazer exercícios de arrays",
    "Preparar apresentação",
    "Enviar relatório",
    "Terminar modulo 4 - Feito",
    "Aprender html e css - Feito"
  ];

//1
for (let i = 0; i < tarefas.length; i++){
    console.log(`${i+1}ª Tarefa: ${tarefas[i]}`);
}


//2
function verifica(tarefas){
    return !tarefas.includes("Feito");
}
let TarefasPendentes = tarefas.filter(verifica);
console.log("Tarefas pendentes: ", TarefasPendentes);


//3
let Ordenado = tarefas.sort();
console.log("Array ordenado com sucesso!!");
console.log("Array Ordenado:", Ordenado);


//4
let PrimeirasTarefas = tarefas.slice(0, 2);
console.log("Primeiras Tarefas:", PrimeirasTarefas);


//5
let Remover = tarefas.pop();
console.log("Tarefa removida com sucesso!!");
console.log("Lista Atualizada:", tarefas);


//6
let Adicionar = tarefas.push("Ler livro novo");
console.log("Tarefa adicionada com sucesso!!");
console.log("Lista Atualizada:", tarefas);
