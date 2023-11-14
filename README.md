# Portfolio Frontend

<!-- descrição breve -->

Frontend do projeto de portfólio pessoal que é integrado com o backend, que pode ser encontrado [aqui](https://github.com/GabrielFeBe/portfolio-backend)

## Tabela de conteúdos

- [Tecnologias](#tecnologias)
- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Como usar](#como-usar)
- [Deploy](#deploy)
- [Licença](#licença)

## Tecnologias

- [React](https://pt-br.reactjs.org/) - Framework Javascript/Typescript
- [Next.js](https://nextjs.org/) - Framework React
- [Typescript](https://www.typescriptlang.org/) - Linguagem de programação
- [TailwindCSS](https://tailwindcss.com/) - Framework CSS
- [Edgestore](https://edgestore.app/) - Um banco de dados de imagens

## Requisitos

- Node.js: [Download](https://nodejs.org/en/download/) >= 16.x.x
- npm: Node Package Manager, vem com o Node.js
- Git: [Download](https://git-scm.com/downloads)

## Instalação

Para rodar o projeto localmente, é necessário clonar o repositório e instalar as dependências.

1. **Clone o repositório**

```bash
git clone git@github.com:GabrielFeBe/portfolio-frontend.git
#then
cd portfolio-frontend
```

2. **Instale as dependências**

```bash
npm install
```

## Como usar

- Esse projeto é integrado com o backend logo é necessário que o backend esteja rodando para que o frontend funcione corretamente, e também é necessário que o banco de dados esteja populado com as informações necessárias para o funcionamento do frontend. Alem disso é necessario ser feita as configurações para conexão com o backend, que pode ser feita no arquivo `.env.local` na raiz do projeto, Alem do edgestore, que é o banco de dados de imagens, que também precisa ser configurado no arquivo `.env.local` na raiz do projeto.
- Apos todas as configurações necessárias, basta rodar o comando `npm run dev` para iniciar o servidor de desenvolvimento, que por padrão é iniciado na porta 3000, logo para acessar o projeto basta acessar `http://localhost:3000` no navegador.

## Deploy

- O projeto está hospedado no [Vercel](https://vercel.com/) e pode ser acessado [aqui](https://portfolio-frontend-seven-topaz.vercel.app/)
- A versão em deploy só permite a visualizações de meus projetos, já que eu configurei o backend e o frontend para não haver criação de novo usuário, e também não é possível fazer login, já que o backend está configurado para não permitir a criação de novos usuários, porem existe um admin button que serve apenas para testar a funcionalidade de admin, que permite a criação de novos projetos, e também a edição e remoção de projetos já existentes, mas nenhum desses dados são salvos no banco de dados, já que o usuario do admin é um usuario fake, e o backend está configurado para não permitir a criação de novos usuários.

## Licença

- Sem licença
