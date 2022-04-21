<h1 align="center">Rede Social NBA</h1>

<p align="center">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/vitorquadros/NBA_social?color=orange&style=plastic">
  <img alt="Last commit" src="https://img.shields.io/github/last-commit/vitorquadros/NBA_social?color=orange&style=plastic">
  <img alt="License" src="https://img.shields.io/github/license/vitorquadros/NBA_social?color=orange&style=plastic">

</p>

> <p align="center">Uma rede social de imagens com o tema basquete e a NBA (National Basketball Association) com intuito de aproximar os amantes do esporte e facilitar interações e compartilhamento de informações/momentos da liga.</p>

<h2 align="center">Conteúdo</h2>

<p align="center">
<a href="#rocket-features">Features</a>
·
<a href="#gear-tecnologias">Tecnologias</a>
·
<a href="#question-como-testar">Como testar</a>
·
<a href="#copyright-licença">Licença</a>
</p>

# :rocket: Features

### Implementadas

- Cadastro e autenticação de usuário com verificação de email

- Criação e edição de perfil de usuário com dados como nome, nome de usuário, imagem de perfil, imagem de capa, time da NBA preferido e outros

- Página de perfil com todos os dados públicos do usuário e suas publicações
- Criação de post com imagem e descrição
- Interação com posts de outros usuários (curtir, comentar e responder à comentários)

### Para implementar

- Acessar o perfil de outro usuário

- Seguir e ser seguido por outros usuários
-
- Deletar post/comentário

# :gear: Tecnologias

### Principais tecnologias usadas

- [Node](https://github.com/nodejs/node)
- [Typescript](https://github.com/microsoft/TypeScript)

#### API

- [Express](https://github.com/expressjs/express)
- [PostgreSQL](https://github.com/postgres/postgres)
- [TypeORM](https://github.com/typeorm/typeorm)
- [BcryptJS](https://github.com/dcodeIO/bcrypt.js/)
- [JsonWebToken](https://github.com/auth0/node-jsonwebtoken)
- [UUID](https://github.com/uuidjs/uuid)
- [Tsyringe](https://github.com/microsoft/tsyringe)
- [Express's CORS](https://github.com/expressjs/cors)
- [Nodemailer](https://github.com/nodemailer/nodemailer)
- [Multer](https://github.com/expressjs/multer)

#### Frontend

- [Vite](https://github.com/vitejs/vite)
- [ReactJS](https://github.com/facebook/react)
- [React Router DOM](https://github.com/remix-run/react-router)
- [Axios](https://github.com/axios/axios)
- [Styled Components](https://github.com/styled-components/styled-components)
- [React Hook Form](https://github.com/react-hook-form/react-hook-form)
- [Yup](https://github.com/jquense/yup)
- [Moment](https://github.com/moment/moment)

# :question: Como testar

### **Executar localmente**

Para ambas as aplicações tenha certeza que você tem o [node](https://github.com/nodejs/node) e o [npm](https://github.com/npm/npm) instalados na sua máquina

### API

1. Crie um arquivo .env na raiz do projeto (api) e preencha as variáveis de ambiente listadas no arquivo [.github/.env.sample](.github/.env.sample)
2. Instale as dependencias da aplicação com `npm install`
3. Se estiver usando [docker](https://github.com/docker/compose) e [docker-compose](https://github.com/docker), substitua as configurações em [docker-compose.yml](./api/docker-compose.yml) antes de criar o container
4. Rode as migrations com `npm run typeorm migration:run` para criar as tabelas no banco de dados
5. Inicie o servidor com `npm run dev`

### Frontend

1. Instale as dependencias da aplicação com `npm install`
2. Inicie o servidor com `npm run dev`

# :copyright: Licença

This project is under the [MIT license](./LICENSE).

<p align="center">
<sub>Made with ❤︎ by <a href="https://github.com/vitorquadros">Vitor Quadros</a></sub>
</p>
