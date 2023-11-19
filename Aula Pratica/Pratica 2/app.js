
//função para calcula IMC
function calularMassaCorporal(altura,peso) {
    imc = peso/(altura*altura);
    return imc.toFixed(2);
}

calularMassaCorporal(1.60,70);
console.log(imc);



 // função para calcular o valor fatorial de um numero
function valorFatorial (numero){
    if (numero === 0 || numero === 1){
        return 1
    }

    let fatorial = 1;
    for (let i = 2; i <= numero; i++){
        fatorial *= i;
    }
    return fatorial
}

let numero = 5;
let resultado = valorFatorial(numero);
console.log (`O fatorial de ${numero} é ${resultado}`);




// função para converte real brasileiro em dolar
function converterValorDolar(valorDolar){
    valorReais = 4.80
    resultadoValorDolarConvertido = valorDolar * valorReais;
    return resultadoValorDolarConvertido.toFixed(2);
}

let valorDolar = 1000.00;
novoValorReais = converterValorDolar(valorDolar);
console.log(`O valor ${valorDolar} R$ dolar, convertido em reais vai ficar ${novoValorReais} R$ reais`);


// função para calcular a area de um perimetro retangular

function calcularAreaPerimetroRetangular (altura,largura){

    let area = altura * largura;
    let perimetro = 2 * (altura + largura);

    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Périmetro da sala: ${perimetro} metros`);
}

let altura = 3;
let largura = 5;
calcularAreaPerimetroRetangular(altura,largura);



// função para calucular o perimetro circular


function calcularAreaperimetroCircular(raio){
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;

    console.log(`Área da sala circular : ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)}metros`);
}

let raio = 4;
calcularAreaperimetroCircular(raio);


// função para criar uma tabuada

function tabuada(numero){
    for (let i = 1; i <= 10; i++){
        let resultado = numero * i
        console.log(`${numero} X  ${i} = ${resultado}`);
    } 
}

tabuada(4);