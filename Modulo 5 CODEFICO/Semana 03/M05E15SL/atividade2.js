const Livro = {
    titulo: "Aventuras de Alice no País das Maravilhas",
    autor: "Lewis Carroll",
    anoPublicacao: 1865 ,
    genero: "Fantasia",
    disponivel: true,

}

console.log(Livro);
for(let l in Livro){
    console.log(`${l}: ${Livro[l]}`);
}

Livro.emprestarLivro = function () {
    if(this.disponivel){
        this.disponivel = false;
        console.log("Livro emprestado com sucesso!");
    } else {
        console.log("O livro já está emprestado!");
    }
}


Livro.emprestarLivro();

console.log(`Livro: ${Livro.titulo} Disponivel: ${Livro.disponivel}`);
