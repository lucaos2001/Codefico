// Aqui serão adicionados seus scripts

//1
document.getElementById("btnClick").onclick = function(){
    alert("Alerta");
}

//2
document.getElementById("inputText").onchange = function(){
    this.style.color = "green";
}

//3
document.getElementById("inputText").oninput = function(){
    this.style.color = "blue";
}

//4
document.getElementById("inputText").onkeydown = function(){
    document.getElementById("outputMessage").innerText = "Tecla pressionada...";
}

document.getElementById("inputText").onkeypress = function(){
    document.getElementById("outputMessage").innerText = "Digitando...";
}

document.getElementById("inputText").onkeyup = function(){
    document.getElementById("outputMessage").innerText = "Tecla não está sendo pressionada...";
}

//5
var box = document.getElementById("box");
box.onmouseover = function(){
    this.style.background = "black";
}

box.onmouseout = function(){
    this.style.background = "green";
}

//6
box.ondragstart = function(event){
    event.dataTransfer.setData("text/plain", "Arrastado");
}

box.ondragover = function(event){
    event.preventDefault();
}

box.ondrop = function(event){
    event.preventDefault();
    var data = event.dataTransfer.getData("text/plain");
    box.innerText = data;
}

//7
window.onload = function(){
    alert("Pagina Carregada");
}

//Extra
var btnChallenge = document.getElementById("btnChallenge");
var contador = 0;

btnChallenge.onclick = function(){
    contador ++;
    document.getElementById("count").innerText = contador;
}

setTimeout(function(){
    alert(`Tempo esgotado! Você clicou ${contador} vezes.`)
}, 10000);