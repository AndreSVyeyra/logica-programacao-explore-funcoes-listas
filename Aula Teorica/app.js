let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag,texto){
    let  titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela("h1","Acertou!");
        exibirTextoNaTela("P","Você descobriu o número secreto!")
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela("p","O número secreto e menor")
        }else{
            exibirTextoNaTela("p","O número secreto é maior")
        }
    }
}

function gerarNumeroAleatorio(){
    let numeroSecreto = parseInt(Math.random() * 10 + 1);
    return numeroSecreto;
}


exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p','Escolha um número entre 0 e 10');


