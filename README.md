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

## Bibliotecas e Frameworks utilizadas no projeto:

- Express, 
  - express-validator
- Nodemon,
- Body-parser,
- Consign,
- CORS,
- Mysql,
- Moment

## Bibliotecas e Frameworks previstas para implementação futura:

- axios
- bcrypt
- cookie-parser
- dotenv
- express-graphql
- http-errors
- jsonwebtoken
- sequelize

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

O Node.js é um tempo de execução JavaScript assíncrono orientado a eventos, baseado no retorno de chamadas de eventos sem bloqueio, oferecendo um modelo Input/Output de evento baseado em thread única.

Isso permite que haja a orquestração de tarefas usando menos espaço em memória.

Seu uso pode envolver o desenvolvimento de ambientes Back-End, servidores web, API REST, microsserviços, scripts e automação.

- Projeção do volume de tráfego de requests e responses por seção,
- Abordagem de i/o assíncronos,
- Disponibilidade de serviços em larga escala,
- Maior proximidade com a infraestrutura mantida no front-end.

Há muitos debates sobre cada aspecto dessa tecnologia, entretanto muitos especialistas concordam que o Node.js exerceu um papel fundamental para a evolução do JavaScript, tendo como protagonistas a própria comunidade de desenvolvedores trabalhando em conjunto com o comitê ECMA para organizar as atualizações da tecnologia.

Além disso, temos como resultado desse esforço colaborativo o surgimento de bibliotecas e frameworks que ajudam na gestão de rotas, regras de autenticação e criptografia, criação e organização de tabelas em bancos de dados, transpilação compatível com as versões estáveis da linguagem, dentre outras soluções.

Nesse caso, o ambiente gerenciado pelo node.js usará: 

- Framework Express para realizar:
  - Roteamento das requests e responses, via routers,
  - Intermediar o tráfego de dados autenticados e validá-los com base no uso de middlewares,
  - Organizar os processos através de modelos, 
  - Controlar as operações pelos controllers e
  - Exibir as respostas pelos viewiers, 
  
  Mas ele também nos permite:
  - Depurar erros, 
  - Sanitizar e refatorar os algoritmos, 
  - Implementar servidores proxies para aumentar o nível de segurança do sistema.

Além disso, como outra vantagem temos o uso de funções assincronas para gerenciar requisições e respostas entre cliente e servidor bem como um repertório gigantesco de frameworks e bibliotecas destinadas a roteirização de requisições, validação de dados, encriptação e muito mais

Como desafios, temos um sistema que possuí como limitação a execução de eventos em uma thread, não havendo a possibilidade de paralelizar processos, o que em um ambiente sincrono de dados gera fila de espera, aumentando o tempo de resposta.

A proposta estudada nesse projeto se baseia em uma API Express gerindo e gerenciando um servidor web, temos de considerar que o servidor web obedece ao padrão de tempo de resposta via protocolo HTTP, onde o servidor tem um tempo máximo de 10.000 milisegundos (10 segundos) para responder a cada chamada, ultrapassado esse limite, o servidor retorna erro 408 Request Timeout.

Toda tecnologia possui vantagens e desafios no uso, dependendo das necessidades que o projeto apresenta, cabendo a nós interpretar e avaliar, com base no plano de estudos escolher quais tecnologias serão utilizadas.

