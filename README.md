# Ferramenta catalogação mídias PEA Pescarte
Pescarte-labeler é um projeto com objetivo de facilitar a catalogação de mídias. Em sua interface é exibida uma mídia a ser catalogada e em uma área ao lado é possivel adicionar, remover e editar etiquetas. As etiquetas podem ser adicionadas em diferentes categorias predefinidas. Logo abaixo da mídia é possivel navegar entre as mídias e ver informações como nome e data. Outras informações como autor e descrição também podem ser editadas.\
Toda informação salva é enviada para um banco de dados, para desenvolvimento desse projeto utilizamos [Api pescarte](https://github.com/peapescarte/pescarte-api).

Esse repositório é do front-end que utiliza como tecnologias web, React.js, Typescript, Styled-components, MSW e graphql.

## Ambiente de Desenvolvimento local

| Requisitos                      | versão     |
| ------------------------------- | ---------- |
| [git](https://git-scm.com/)     | `v2.40.0`  |
| [nodejs](https://nodejs.org/en) | `v18.14.2` |


Para instalar as dependencias, dentro do repositório execute:

```sh dark
npm install
```

### Executando pela primeira vez

Algumas configurações são necessárias.

Copie de .env.example o exemplo de variaveis de ambientes a serem configuradas.

Crie um arquivo chamado .env.development com essas chaves e insira as informações\
REACT_APP_MODE="" (a variavel que descreve o ambiente pode ser, 'development' e 'homologation')\
REACT_APP_API_BASE_URL="" (a variavel que descreve qual url para api que consumira os dados)\

### Para levantar o servidor:

```sh dark
npm run dev
```

Para analisar a estrutura do código:

```sh dark
npm run lint
```

Para rodar um fix de possiveis erros:

```sh dark
npm run lint:fix
```

## Estrutura do projeto
/public - Se encontram arquivos disponibilizados publicamente como as logos dos apoiadores do projeto\
/src - Armazena todo código do projeto dentro de /src\
/components - diretório dos componentes globais que são reutilizados no projeto.\
/graphql - configura o cliente graphql do projeto e chamadas globais.\
/helpers - scripts de rotina.\
/interfaces - interfaces typescript que são utilizadas em diversas partes do projeto.\
/mocks - diretório de configuração do mock utilizando MSW (https://mswjs.io/).\
/modules - modulos do projeto, aqui se encontram os componentes de alto nivel.\
/pages - diretório de paginas.\
/routes - configuração de rotas.\
/service - services que auxiliam nas chamadas http.\
index.tsx - arquivo raiz.\

## Proximos passos
[] Listagem das midas com paginação, filtros e redirecionado para a etiquetagem.
[] Formulário para cadastro de novas midias com upload de arquivo.

## Gostaria de contribuir com o projeto?

Leia nosso [documento de guia para contribuição](./CONTRIBUTING.md)
