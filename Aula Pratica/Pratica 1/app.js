let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificaBotaoConsole(){
    console.log("O botão console foi clicado");
}

function verificaBotaoAlert(){
    console.log("Eu amo JS");
}

function verificaBotaoPrompt(){
    let nomeCidade = prompt("Digite o nome da cidade: ");
    alert(`Estive em ${nomeCidade} e lembrei de você.`);
}

function verificaBotaoSoma(){
    let numb1 = parseInt(prompt("Digite o primeiro número: "));
    let numb2 = parseInt(prompt("Digite o segundo número: "))

    let soma = numb1 + numb2;

    alert(`A soma entre ${numb1} + ${numb2} = ${soma}`);
}