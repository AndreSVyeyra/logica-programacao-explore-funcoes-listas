let numeroSecreto = gerarNumeroAleatorio();
let numeroTentativa = 1;


exibirMensagemInicial();

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
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela("p","O número secreto e menor")
        }else{
            exibirTextoNaTela("p","O número secreto é maior")
        }

        numeroTentativa++;
        limparCampo();


    }
}

function gerarNumeroAleatorio(){
    let numeroSecreto = parseInt(Math.random() * 10 + 1);
    return numeroSecreto;
}


function exibirMensagemInicial(){

    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número entre 0 e 10');


}



function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reinciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);

}