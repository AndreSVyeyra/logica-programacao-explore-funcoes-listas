function verificandoImc(){
    let peso = parseFloat(prompt('Digite o peso: '));
    let altura = parseFloat(prompt('Digite a altura: '));

    let imc = peso /(altura*altura);
    
    if(imc < 18.5){
        alert(`IMC é ${imc.toFixed(2)} e está abaixo do peso`);
    }else if(imc >= 18.5 && imc <= 24.9){
            alert(`IMC é ${imc.toFixed(2)} e está com o peso normal`);
    }
}