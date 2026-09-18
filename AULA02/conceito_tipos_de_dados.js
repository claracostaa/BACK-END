// Tipos de dados
// No javascript, tudo o que armazenamos em variáveis tem um tipo, Esses tipos definem o que podemos fazer com os valores.

//Principais tipos de dados;
// String (textos)
// Number (números)
// Boolean (verdadeiro ou falso)
// Object (objtos, que agrupam informações)
// Array (Listas de valores)
// Null (valor vazio)
// Undefined (quando algo não foi definido)

let nome = "jarvis";
let mensagem = 'Ola, mundo'

console.log (nome);
console.log(mensagem);

let saudacao = "ola," + nome + "!";
console.log (saudacao); //Exibe "ola, jarvis"

//typeof 
// O Typeof serve para descobrir um tipo de um valor ou variavel

let nomeDois = "2";
console.log(typeof nomeDois);

let soma = 10 + 5;
console.log(soma);

// Boolean (Verdadeiro ou falso)
// Um booblean pode ter apenas dois valores: true (verdadeiro) ou false (falso)

let maiorDeIdade = true;
let menorDeIdade = false;

console.log(maiorDeIdade); //Exibe true
console.log(menorDeIdade); //Exibe false

let idade = 16;
let podeDirigir = idade >= 18;
console.log(podeDirigir);