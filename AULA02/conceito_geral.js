// INICIO BACKEND - JAVA SCRIPT

// VARIAVEIS

// ANTIGO!!!, pode ser redeclarado e mudar o valor.
var idade = 10
var idade = 20 // não gera erro

// Mais moderno, pode mudar de valor, mas não pode ser redeclarado
let nome = "Julia"
nome = "Dafny";  // permitido
// let nome = "Jose"; //❌erro

// const é fixo, não pode mudar de valor
const pi = 3.14;
// pi = 40; //❌erro

//-----------------------------
// FORMAS DE ESCREVER UM CODIGO
//------------------------------

//_________________________________
// CAMEL CASE ----- * A mais famosa
// - Primeira palavra minúscula
// - Palavras seguintes começam com maiúscula

// let nomecompleto; let idadeUsuario; functioncalcularIdade(){}

//___________________________________
// PASCALCASE
// - Todas as palavras começam com letra maiúscula

// class UsuarioSistema {
//   constructor(nome, idade) {
//       this.nome = nome;
//      this.idade = idade;
//  }
// };

//___________________________________
// SNAKE CASE
// - Palavras separadas por underscore _

// let nome_completo; let total_vendas;