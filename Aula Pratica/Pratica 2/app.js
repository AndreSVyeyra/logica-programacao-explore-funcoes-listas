/*
function exibirOlaMundo (){
    console.log("Olá mundo!");
}

console.log(exibirOlaMundo())

function exbiriNome(){
    nome = "Tiago";

    return nome;
}

console.log(`Olá ${exbiriNome()}`);


function dobroNumero(num1){

    numero = num1 * 2;

    return numero;
}


console.log(`O dobro de 9 é ${dobroNumero(9)}`);




*/


 function media(numb1,numb2,numb3){

    resultadoDaMedia = (numb1+numb2+numb3)/3

    return resultadoDaMedia;

    
    
 }


 function verificandoMedia(){

    numero1 = parseFloat(prompt("Digite o primeiro número: "));
    numero2 = parseFloat(prompt("Digite o segundo número: "));
    numero3 = parseFloat(prompt("Digite o terceiro número: "));


    mediaCalculada = media(numero1,numero2,numero3);

    alert(`A média de  ${numero1}, ${numero2}, ${numero3} é igual a ${mediaCalculada.toFixed(2)}`);
}


