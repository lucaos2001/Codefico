function Ocultar(){
    const Foto = document.getElementById("foto");
    if(Foto.style.visibility == "hidden"){
        Foto.style.visibility = "visible"
    }else{
        Foto.style.visibility = "hidden"
    }

}

function Formatacao(){
    const Texto = document.getElementById("sobre");
    const input = document.getElementById("formato");
    Texto.style.textAlign = input.value;

}

function Alterar(){
    const footer = document.getElementById("footer");
    const header = document.getElementById("header");
    const input = document.getElementById("cor");
    if(input.value == "white"){
        footer.style.backgroundColor = "white";
        footer.style.color = "black";
        header.style.backgroundColor = "white";
        header.style.color = "black";
    }else if(input.value == "black"){
        footer.style.backgroundColor = "black";
        footer.style.color = "white";
        header.style.backgroundColor = "black";
        header.style.color = "white";
    }else{
        footer.style.backgroundColor = input.value;
        header.style.backgroundColor = input.value;
    }

}

function Fonte (){
    const Texto = document.getElementById("sobre");
    const input = document.getElementById("fonte");
    Texto.style.fontFamily = input.value;
}

function Tema(){
    const sec = document.getElementById("conteudo");
    if(sec.style.backgroundColor == "black"){
        sec.style.backgroundColor = "white";
        sec.style.color = "black"
    }else{
        sec.style.backgroundColor = "black";
        sec.style.color = "white";
    }
}