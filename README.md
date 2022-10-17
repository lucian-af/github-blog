# github-blog

### Blog pessoal criado a partir do desafio proposto pela trilha Ignite da Rocketseat.

### Setup de ambiente:
- [Node LTS](https://nodejs.org/dist/v16.17.1/node-v16.17.1-x64.msi);
- [Yarn 1.22.x](https://yarnpkg.com/);

### Para executar o projeto:
 - clonar o reposítório `git clone https://github.com/lucian-af/github-blog.git`;
 - executar o comando `yarn install`;
 - executar o comando `yarn dev`;
 
Seguindo os passos acima o projeto é para rodar em uma URL, que é mostrada no terminal e parecida com `http://127.0.0.1:8080`;

### Página inicial do projeto:

![Página principal](https://user-images.githubusercontent.com/65927348/196068293-836a982c-1ed7-4e18-b928-31593cf4fb5b.png)

### Como o projetop está organizado

- `src/pages` - ficam as páginas/rotas da aplicação;
- `src/components` - ficam os componentes genéricos, que podem ser adicionados em novas páginas/rotas;

### Recursos utilizados no projeto

Nesse projeto está sendo usado recursos de `route e state` do `ReactJS`, `styled-components` para estilização via `CSS`.

Está sendo usada a lib [`axios`](https://axios-http.com/docs/intro) para consultas na API do GitHub.

[Protótipo navegável](https://www.figma.com/proto/v90wWmmHXNoy8tcMDpQrpS/GitHub-Blog?node-id=0%3A1&viewport=723%2C-269%2C0.52&scaling=min-zoom&starting-point-node-id=2%3A1550)

### Dica

Para ter o seu próprio Blog com o mesmo layout desse projeto, basta trocar os valores das variáveis no arquivo [`env.ts`](https://github.com/lucian-af/github-blog/blob/main/.env)

```ts
  BLOG_USER_DEFAULT=<seu-usuario>
  BLOG_REPO_DEFAULT=<seu-usuario>/<seu-respositorio-com-issues>
```

**Bora lá ?!** 😎
