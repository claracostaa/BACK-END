// FUNÇÕES EM JAVASCRIPT

// Analogia SIMPLES!
// Você vai colocar valores (parâmetros)
// Ela processa
// Devolve um resultado (return)

//-----------------------------------
// Estrutura básica de uma função
//-----------------------------------

//function nomeDaFuncao(parametro1, parametro2){
//    //código que será executado
// returm resultado;
// }

// function --> palavra-chave
// nomeDaFuncao --> nome da função
// parâmetros --> valores que a função recebe
// return --> valor que a função devolve

// 5 EXEMPLO

// 1 - Somar dois números

function somar(a, b) {
    return a +b;
}

console.log(somar(2,15))

// 2 - Converter real para dólar
function realParaDolar(valorReal, cotacao){
    return valorReal / cotacao;
}

console.log(realParaDolar(10, 5.20).toFixed(2))

// 3 - Converter dólar para real
function dolarParaReal(valorDolar, cotacao){
    return valorDolar * cotacao;
}
console.log(dolarParaReal(5, 5.20));

// 4 - Aumento de salário (Você merece 25% de aumento)
function calcularAumento(Salario){
    return Salario + (Salario * 0,25);
}
console.log(calcularAumento(2000));

// Verifique se é par ou impar?
// Verifique se é par ou ímpar
function ImparPar(numero){
    if (numero % 2 === 0){
        return "Par";
    } else {
        return "Ímpar";
    }
}
console.log(ImparPar(10));