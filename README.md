# Accept-text.js

Projeto inlcui as seguintes tecnologias:

- Javascript ES6

# Funções

Este projeto injeta um texto predefinido à um formulário em páginas web com um checkbox e desativando o botão do mesmo formulário enquanto o checkbox não for true.

# Utilização

Para utilizar, primeiro deverá incluir o arquivo accept-text.js em algum diretório de seu projeto, assests/js/, por exemplo e fazer um link do mesmo no seu arquivo antes de finalizar a tag </body>. Exemplo:

    // Após ter adicionado o arquivo na pasta /assets/js/
    <body>
        ...
        <script type='text/javascript' src='assets/js/accept-text.js' charset="utf-8"></script>
    </body>

Após isso, o próximo passo é adicionar dentro de cada <Form> a única div necessária antes do botão Enviar de cada formulário.

    // Div que deve ser adicionada
    <div data-button="id-do-botão-enviar" data-name="Nome do Lojista" name="accept-text"></div>

Exemplo:

    // DIV necessária dentro do <Form> antes do botão Enviar(submit)
    <form action="/send-data.js">
        ...
        <div data-button="btn-send" data-name="Aba Veículos" name="accept-text"></div>
        <button id="btn-send" name="btn-go" type="submit">Enviar</button>
    </form>

Atributos necessários na tag div:

| Atributo    | Função                                                                    |
| ----------- | ------------------------------------------------------------------------- |
| data-button | Id do botão enviar que o script vai capturar dentro do form               |
| data-name   | Nome do lojista/cliente para ser adicionado no corpo do texto             |
| name        | Obrigatóriamente deverá ser "accept-text" para o script adicionar o texto |

# Incompatibilidade

Baseado em ES6, alguns navegadores antigo podem não rodar o scipt, havendo tal problema existe o arquivo accept-text-transpile.js estendendo a compatibilidade com Javascript vanilla.
