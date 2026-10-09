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

//========================
// ROTAS DA API
//========================

// ROTA 1 - Cachorro aleatório
app.get("/api/cachorros/aleatorio", (req, res)=> {
//req - request(requisição) = é o pedido que chega ao servidor, por exemplo, o navegadoir pede uma foto de cachorro
// res - response(resposta) = é o que o servidor envia de volta, por exemplo, o endereço da foto do cachorro

// pegar todas as fotos de todas as racas
// object.values pega os valores do objeto
// flat transforma tudo em um único array
const todasAsFotos = Object.values(cachorros).flat();

//sorteia uma foto aleatória
const item = sortear(todasAsFotos)

// responder para o cliente em um formato JSON
res.json({
    //status da resposta
    status: "sucess", 
    //URL da imagem que foi sorteada
    message: `http://localhost:${PORT}/fotos/${item}`
});
});

// ROTA 2 - Cachorro de raça
// exemplo de acesso:
// http://localhost:3000/api/cachorros/husky

app.get("/api/cachorros/:raca", (req, res) => {

    //pega o parametro da URL (ex: husky)
    const raca = req.params.raca.toLocaleLowerCase();
    //prams = contém os parametros definidos na URL da rota
    //.raca = acessa o parametro chamado raca.
    //.toLocaleLowerCase() = Transforma todas as letras em minúculas
    if (cachorros[raca]){
    // cachorros[raca]: procurar a raça dentro do objeto *cachorros*
    //!: significa não: Nesse caso, verifica se a raça não existe ou se seu valor é falso
    // se caso não exstir, retorna erro 404
    res.status(404).json({
        status: "error",
        message: `Raça "${raca}" não encontrada`
    });

    //encerra a execução da rota
    return;
    }

    //sorteia uma foto da raca solicitada
    const item = sortear(cachorros[raca]);

    // retorna a resposta em JSON
    res.json({
        status: "success",
        message: `http://localhost:${PORT}/fotos/${item}`
    });
});

//========================
// INICIA O SERVIDOR
//========================

// inicia o servidor express
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log(`Coloque as fotos manualmente em: data/fotos/`);

})
