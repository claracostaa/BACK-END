//========================
// NOSSA API DE CACHORROS
//========================
//
// Agora as fotos NÃO são mais baixadas automaticamentes!.
// Elas DEVEM existir manualmente na pasta
// data/fotos
//========================

// ROTAS 
// GET /api/cachorros/aleatorio
// GET /api/cachorros/:raca

// Importar o framewrok Express para criar o servidor
const Express = require("express");
// Importar o CORS para permitir requisições de outros dominios (ex: frontend)
const cors = require("cors");
// Importar o modulo de arquivos do NODE
const fs = require("fs")
// Importa utilidades para trabalhar com caminhos de arquivos
const path = require("path");
// Importa o arquivo JSON que contem as raças e fotos
const cachorros = require("./data/dogs.json")
// cria a aplicação Express
const app = require();
// Definir a porta que o servidor vai funcionar
const PORT = 3000;
// Habilitar o uso do CORS na aplicação
app.use(cors());

//========================
// SERVIR ARQUIVOS ESTÁTICOS
//========================

// Nós falamos para o express
// "Todo o que estiver na pasta data/fotos pode ser acessada pela URL /fotos"
// Exemplo:
// HTTP://LOCALHOST:3000/FOTOS/HUSKY/1.JPG

app.use(
    "/fotos",
    Express.static(
        path.join(__dirname, "data/fotos") // caminho real da pasta do servidor
    )
)

//========================
// FUNÇÃO AUXILIAR
//========================
// função  que recebe um array e retorna um item aleatorio dele
function sortear(array){
    // gera um numero aleatorio entre 0 e o tamnho do array
    //array.lenght - conta quantos itens existem na linha
    //math.random() - sorteia um numero decimal entre 0 e 1
    //math.random() * array.lenght - multiplica o numero sorteado pela quantidade de itens
    //math.florr() - tira a parte decimal, arredondando para baixo
    const i = Math.floor(Math.random() * array.length)
    // const i = guarda a posição da variavel i 
    // retorna o item sorteado
    return array[i];
}