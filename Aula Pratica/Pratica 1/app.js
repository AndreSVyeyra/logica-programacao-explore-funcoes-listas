// Função mostra olá mundo no console
function botaoConsole (){
    console.log("Olá mundo!");
}


// função para retorna nome  digitado pelo usuário
function nome(){
        let nome = prompt(" Qual o seu nome ?");
        console.log(`Olá, ${nome}!`);
}

// função para retorna o dobro de um numero
function numero(){
        let numero = parseInt(prompt("Digite um número: "));
        let dobro = numero * numero;
        console.log(`O dobro do numero digitado é: ${dobro}`);
}


// função para calcula a média de 3 numeros digitados pelo usuário
function media(){
    let numero1 = parseFloat(prompt("Digite o primeiro número: "));
    let numero2 = parseFloat(prompt("Digite o segundo número: "));
    let numero3 = parseFloat(prompt("Digite o terceiro numero: "));

    let media = (numero1 + numero2 + numero3)/3;

    console.log(`A média de ${numero1} + ${numero2} + ${numero3} = ${parseFloat(media.toFixed(2))}`);

}


// função recebe nome e exibi na tela
function exibirOlaNome(nome){
    console.log(`Olá ${nome}`);
    return nome;
}

exibirOlaNome("André");


// funçaõ recebe dois números e informa qual é o maior entre eles
function retornaMaiorNumero (numero1,numero2){
    if (numero1 > numero2){
        console.log(`O numero ${numero1} é maior`);
    }else{
        console.log(`O numero ${numero2} é maior`);
    }

    return numero1,numero2;
}

retornaMaiorNumero(2,7);



function multiplicacaoNumero(numero){
       
        return numero * numero;
}

let numeroQuadrado = multiplicacaoNumero(2);
console.log(numeroQuadrado);
