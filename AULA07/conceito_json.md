// JSON significa JavaScript Object Nation e é um formato de representação e troca de dados.

JSON É COMO FICHA DE CADASTRO

FICHA FÍSICA:             JSON
Nome: João                "nome": "João"
Idade: 25                 "Idade": "25"
Cideade: SP               "Cidade": "SP"

É um formato para ORGANIZAR DADOS que TODO MUNDO entende (qualquer linguagem)

<!-- =============================== -->
{
    "cachorro": {
        "nome": "Rex"
        "idade": 3,
        "raca": "Labrador",
        "vacinado": true,
        "peso": 25.5,
        "brinquedo": ["bola", "osso", "frisbee"],
        "dono": {
            "nome": "João",
            "telefone": "11999999999",
        }
    }
}
<!-- =============================== -->
EXPLICAÇÃO
<!-- =============================== -->
// STRING (Texto) - Sempre com aspas
"nome": "Rex"

// NUMBER (numero) - Sem aspas
"idade": 3,
"peso": 25.5,

// BOOLEAN (true/false) 
"vacinado": true,

// ARRAY (Lista) - com colchetes
"brinquedo": ["bola", "osso", "frisbee"],

// OBJECT (Objeto) - com chave
"dono": {
            "nome": "João",
            "telefone": "11999999999",
        }

// NULL (vazio)
"dataFalecimento": null