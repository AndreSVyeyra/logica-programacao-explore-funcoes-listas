let numeroSecreto = gerarNumeroAleatorio();
let numeroTentativa = 1;

function exibirTextoNaTela(tag,texto){
    let  titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
}



function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela("h1","Acertou!");
        let mensagemTentativa = numeroTentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Você descobriu o número secreto com ${numeroTentativa} ${mensagemTentativa}!`;
        exibirTextoNaTela("p", mensagem);
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela("p","O número secreto e menor")
        }else{
            exibirTextoNaTela("p","O número secreto é maior")
        }

        numeroTentativa++;
    }
}

function gerarNumeroAleatorio(){
    let numeroSecreto = parseInt(Math.random() * 10 + 1);
    return numeroSecreto;
}


exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p','Escolha um número entre 0 e 10');


