// chamando o documento HTML e passando um texto para a tag h1 
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';


// Chamando função no HTML botaoConsole() e passando uma resposta no console. 
function botaoConsole() {
    console.log("O botão foi clicado");
}

//  Chamando função no HTML botaoAlert() e passando uma resposta no console. 
function botaoAlert() {
    console.log("Eu amo JS");
}


// Função criada para quando clicado no botão prompt o mesmo faça uma pergunta e retorne para o usuário uma resposta juntamente com a resposta dada pelo mesmo. 
function botaoPrompt() {
    let cidadeBrasil = prompt("Digite o nome de uma cidade do Brasil: ");
    alert(`Estive em ${cidadeBrasil} e lembrei de você.`);
}

function botaoSoma() {
    let numero1 =  parseFloat(prompt("Digite um número:"));
    let numero2 =  parseFloat(prompt("Digite outro número:")) ;

    let soma = numero1 + numero2;


    alert (`A soma de ${numero1} + ${numero2} = ${parseFloat(soma.toFixed(2))}`);
}