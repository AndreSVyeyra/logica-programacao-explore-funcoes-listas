/* let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto'; */

/* let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 0 e 10'; */

function verificarChute(){
    console.log("O botão chute foi clicado!");
}

function exibirTextoNaTela(tag,texto){
    let  titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
}

exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p','Escolha um número entre 0 e 100');

