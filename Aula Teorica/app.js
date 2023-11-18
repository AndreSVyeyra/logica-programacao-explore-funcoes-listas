// comando para criar uma ligação entre a tag HTML e o javaScript para inserir dados

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

// função

function verificarChute() {
    console.log('O botão foi clicado!');
}