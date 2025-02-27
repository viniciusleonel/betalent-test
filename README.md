# BeTalent - Sistema de Gestão de Funcionários

## Descrição do Projeto

O BeTalent é uma aplicação web desenvolvida para gerenciar informações de funcionários. A aplicação permite visualizar, pesquisar e filtrar dados de funcionários, como nome, cargo e telefone. O sistema é construído utilizando React e TypeScript, com um backend simulado usando o JSON Server.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **JSON Server**: Ferramenta para simular um backend RESTful.
- **Vite**: Ferramenta de build e desenvolvimento para aplicações web.
- **CSS**: Para estilização da aplicação.

## Funcionalidades

- **Visualização de Funcionários**: A aplicação exibe uma tabela com informações dos funcionários, incluindo foto, nome, cargo, data de admissão e telefone.
- **Pesquisa**: Os usuários podem pesquisar funcionários por nome, cargo ou telefone.
- **Responsividade**: A interface é responsiva e se adapta a diferentes tamanhos de tela.

## Pré-requisitos

Antes de rodar a aplicação, você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (geralmente instalado junto com o Node.js)
- [JSON Server](https://github.com/typicode/json-server) (para simular o backend)

## Instalação

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/viniciusleonel/betalent-test
   cd betalent-test
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Inicie o servidor JSON**:

   Para simular o backend, você pode usar o JSON Server. Execute o seguinte comando na raiz do projeto para iniciar o servidor:

   ```bash
   npx json-server --watch db.json --port 3000
   ```

   Caso você tenha problemas com o json-server, tente rodá-lo com `npx json-server db.json` ou com `yarn json-server <path>/db.json`, em que `<path>` é o caminho completo até o diretório em que o arquivo `db.json` está localizado. Se mesmo assim não funcionar, busque ajuda na web.

4. **Inicie a aplicação**:

   Em um novo terminal, execute o comando:

   ```bash
   npm run dev
   ```

   A aplicação estará disponível em `http://localhost:5173`.

## Estrutura do Projeto

- `src/`: Contém todos os arquivos de código-fonte da aplicação.
  - `components/`: Componentes React reutilizáveis.
  - `services/`: Serviços para interagir com a API.
  - `styles/`: Estilos CSS da aplicação.
  - `types/`: Tipos TypeScript utilizados na aplicação.
  - `utils/`: Funções utilitárias, como formatação de data e telefone.
- `db.json`: Arquivo que simula o banco de dados com informações dos funcionários.
- `vite.config.ts`: Configuração do Vite, o bundler utilizado na aplicação.

## Feito por:

### Vinicius Leonel

### Linkedin: https://www.linkedin.com/in/viniciuslps
