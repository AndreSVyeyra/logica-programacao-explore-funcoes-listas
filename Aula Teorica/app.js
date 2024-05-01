let numeroSecreto =  gerarNumeroAleatorio();

function exibirTextoNaTela(tag,texto){
    let  titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
}

function verificarChute(){
    console.log(numeroSecreto);
}

function gerarNumeroAleatorio(){
    let numeroSecreto = parseInt(Math.random() * 10 + 1);
    return numeroSecreto;
}


exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p','Escolha um número entre 0 e 10');

