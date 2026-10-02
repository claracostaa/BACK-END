// ==============================
// SELECIONANDO ELEMENTOS DO DOM
// ==============================

// Selecionando por ID
console.log(document.getElementById("titulo"));
// Para visualização na console
let titulo = document.getElementById("titulo");
let subtitulo = document.getElementById("subtitulo");
let paragrafo = document.getElementById("paragarfo");
let imagem = document.getElementById("imagemteste");


// Selecionando por classe
let caixas = document.getElementsByClassName("box");

//mostar no console.log
console.log(titulo);
console.log(caixas);
console.log(imagem);

// ============================
// FUNÇÃO PARA ALTERAR O CONTEUDO
// ============================

function alterar(){
    titulo.innerHTML = "bob espoja é legal!"
    subtitulo.innerHTML = "muito fofo!"

    // Alterando elementos de classe
    caixas[0].innerText = "Primeiro parágrafo alterado"
    caixas[1].innerText = "Segundo parágrafo alterado"

    //Alterando imagem
    imagem.src = "https://m.media-amazon.com/images/I/91jIPFCqqtL._AC_UF1000,1000_QL80_.jpg"
}