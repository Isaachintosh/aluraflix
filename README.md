# aluraflix

## Sejam bem vindos(as) ao projeto Aliraflix!

Esse projeto tem por objetivo criar o Back-End de uma aplicação feita com React.

Para tal desenvolvi uma API REST em Node utilizando o Express e o MySQL como banco de dados.

## Preparando o ambiente para inicialização

- Execute o comando ```yarn install``` para instalar todas as dependências

- Execute o comando ```yarn start``` para:

  - checar se todas as dependências foram instaladas adequadamente
  - inicializar o servidor web

## Requisitos necessários para executar a API:

- Node.js 14
- MySQL Workbench 8.0 / Beekeeper para criar e manipular o banco de dados
- Banco de dados criado com o nome: videos_catalog
- Postman / Insomnia (para simular rotas em REST)

## Caso surjam erros, o que fazer?

- Entrar em contato comigo mandando print-screen do erro gerado pelo terminal/console

## Features implementadas:

- Cadastro de videos com base no titulo, descrição e url
- Listagem de videos cadastrados no banco de dados
- Validação de cadastro, campos vazios, com caracteres diferentes de letras e números são inválidos
- Validação de cadastro unico de video, a fim de evitar duplicidade de conteúdo baseado na sua url

## Features futuras

- Criação de migrations para facilitar a configuração do ambiente do banco de dados
- Criar tabela de usuários, implementando autenticação por criptografia
- Criar assinatura de criação de conteúdo associada ao video registrado
- Aplicar regras de acesso a postagem, somente admins publicam conteúdo
- Integrar API ao front-end
- Publicar o sistema

## O que aprendi na primeira semana:

Apesar do Node.js apresentar uma proposta muito interessante ao Back-End, seu uso em projetos de grande porte, no entanto, acaba gerando muitos debates e controvérsias.

Toda tecnologia possui vantagens e desafios no uso, dependendo das necessidades que o projeto apresenta.

Nesse caso, o ambiente de uso do node.js temos o aspecto técnico de uso da linguagem javascript do lado do servidor, se tornando um ambiente mais amigável para quem conhece a sintaxe dele no front-end.

Além disso, como outra vantagem temos o uso de funções assincronas para gerenciar requisições e respostas entre cliente e servidor bem como um repertório gigantesco de frameworks e bibliotecas destinadas a roteirização de requisições, validação de dados, encriptação e muito mais

Como desafios, temos um sistema que possuí um limite inferior de requisições em grande escala, por se tratar de uma tecnologia cuja proposta original era exclusivamente cuidar e manipular do DOM
