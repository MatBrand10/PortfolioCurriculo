# Portfólio profissional — Matheus Romano Brandão

Este projeto é um portfólio pessoal desenvolvido com React + Vite para apresentar a trajetória profissional, habilidades técnicas e projetos de Matheus Romano Brandão.

## Tecnologias utilizadas

- React
- Vite
- React Router DOM
- Devicons React (logos de tecnologias)
- Lucide React (ícones de interface)
- JavaScript

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

3. Gere a versão de produção:

```bash
npm run build
```

## Estrutura do projeto

```text
src/
  components/
    ContactCard.jsx
    CertificationCard.jsx
    ExperienceCard.jsx
    Footer.jsx
    Header.jsx
    Layout.jsx
    ProjectCard.jsx
    SectionTitle.jsx
    SkillCard.jsx
  data/
    certifications.js
    experiences.js
    skills.js
  pages/
    About.jsx
    Certifications.jsx
    Contact.jsx
    Experience.jsx
    Home.jsx
    Projects.jsx
    Skills.jsx
  styles/
    components.css
    global.css
  App.jsx
  main.jsx
```

## Explicação didática para apresentação

### 1. Como funciona o React com Vite
O React é a biblioteca usada para construir interfaces com base em componentes. O Vite é uma ferramenta que facilita o desenvolvimento, oferecendo rapidez na execução, rebuild instantâneo e estrutura leve para projetos modernos.

### 2. Para que serve cada pasta
- `src/components`: componentes reutilizáveis do portfólio.
- `src/pages`: páginas da aplicação.
- `src/data`: informações organizadas em objetos e listas.
- `src/styles`: arquivos de estilo globals e específicos.
- `src/App.jsx`: define as rotas e o layout da aplicação.
- `src/main.jsx`: inicializa o React e carrega o navegador.

### 3. Como funcionam os componentes
Cada parte visual do site foi separada em um componente, como cabeçalho, cards de experiência, projetos, certificados e contato. Isso facilita manutenção, reutilização e leitura do código.

### 4. Como as props são utilizadas
As props permitem enviar dados de um componente para outro. Por exemplo, um card de experiência recebe informações como cargo, empresa, período e atividades por meio de props.

### 5. Onde foi aplicado useState
O `useState` foi usado para controlar:
- menu mobile do cabeçalho;
- categoria ativa das habilidades;
- expansão de cards de experiência;
- tema claro/escuro;
- carregamento e exibição dos dados do GitHub.

### 6. Como funciona o React Router
O React Router organiza a navegação em múltiplas páginas sem recarregar o navegador. Cada rota representa uma seção do portfólio, como início, sobre, experiência, habilidades, projetos, certificações e contato.

### 7. Como os dados dos projetos são organizados
Os dados dos projetos são buscados dinamicamente da API pública do GitHub. Os repositórios públicos são listados, inclusive forks, que recebem identificação própria. O código trata carregamento, erros e ausência de dados, exibindo informações reais e evitando dados fictícios.

### 8. Como funciona a integração com GitHub
A aplicação consulta a API pública do GitHub para obter repositórios do perfil `MatBrand10`. Cada card tem um link direto para o repositório; quando o GitHub informa uma página de demonstração, ela aparece como link separado. Os cards também exibem nome, linguagem principal, descrição, número de estrelas, forks e se o repositório é um fork.

### 9. Como funciona a estilização
A estilização foi organizada em arquivos CSS dedicados para limpeza e manutenção. O layout oferece temas claro e escuro com cores, superfícies e sombras ajustadas para cada modo, além de detalhes em roxo e azul, cards, logos das tecnologias via Devicons React, ícones de interface Lucide React e responsividade.

### 10. Como executar e publicar no GitHub
Para executar localmente, basta usar os comandos `npm install`, `npm run dev` e `npm run build`.

Para publicar no GitHub:
1. Crie um repositório no GitHub.
2. Conecte o projeto com o repositório remoto.
3. Envie os arquivos com `git add .`, `git commit -m "Portfólio profissional"` e `git push origin main`.
4. Ative o GitHub Pages, se quiser publicar a aplicação na web.

## Possíveis perguntas do professor e respostas

### Qual a diferença entre React e Vite?
React cuida da criação da interface; Vite é a ferramenta de desenvolvimento e build que agiliza o processo.

### Por que organizar a aplicação em componentes?
Porque melhora a manutenção, reaproveita trechos e facilita a leitura do código.

### Como o portfolio se adapta a telas menores?
Foi implementado um layout responsivo usando regras de CSS com media queries e navbar mobile.

### O que acontece se a API do GitHub falhar?
A aplicação exibe uma mensagem de erro sem inventar dados.

### O projeto pode ser expandido?
Sim. Novas seções, projetos, certificações e melhorias visuais podem ser adicionadas sem quebrar a estrutura atual.

## Autor

Matheus Romano Brandão
