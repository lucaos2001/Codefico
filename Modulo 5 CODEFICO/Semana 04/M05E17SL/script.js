// Aqui serão adicionados seus scripts

//1
const NoticiaPrincipal = document.getElementById("noticia-principal");
alert(NoticiaPrincipal.innerHTML);

//2
const Titulos = document.getElementsByTagName("h1");
for(const Titulo of Titulos){
    Titulo.style.fontWeight = "bold";
    Titulo.style.color = "red";
}

//3
const Paragrafos = document.getElementsByClassName("paragrafo-noticia");
for(const Paragrafo of Paragrafos){
    Paragrafo.innerHTML = "Leia a notícia completa";
}

//4
const SecaoComentarios = document.getElementById("secao-comentarios");
const NovoComentario = document.createElement("p");
NovoComentario.innerHTML = "Deixe seu comentário";
SecaoComentarios.appendChild(NovoComentario);


//5
const Atualizacoes = document.getElementById("ultimas-atualizacoes");
const UltimoItem = Atualizacoes.lastElementChild;
Atualizacoes.removeChild(UltimoItem);

//EXTRA
const Tema = document.getElementById("alternar-tema");

Tema.addEventListener("click", () => {
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "#fff";
    }
)