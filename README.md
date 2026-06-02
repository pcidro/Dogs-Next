# Dogs Next

Dogs Next é uma rede social para cachorros feita com Next.js. A ideia é simples: criar um espaço onde os usuários podem postar fotos dos seus dogs, ver publicações de outros perfis, comentar e acompanhar os acessos das próprias fotos.

Deploy: https://dogs-next-dun.vercel.app/

## Sobre o projeto

Esse projeto foi desenvolvido como uma aplicação web completa, com autenticação, rotas protegidas, feed de fotos, páginas de perfil e uma área de conta para gerenciar postagens.

Os dados de usuários, fotos, comentários e estatísticas vêm de uma API externa, o que deixou o projeto mais próximo de uma aplicação real.

## Funcionalidades

- Cadastro e login de usuários
- Recuperação e redefinição de senha
- Feed com fotos dos cachorros
- Scroll infinito no feed
- Página individual para cada foto
- Comentários nas publicações
- Perfil público dos usuários
- Área logada com fotos do usuário
- Upload de novas fotos com nome, peso e idade
- Exclusão de fotos próprias
- Página de estatísticas com gráficos de acessos
- Layout responsivo

## Tecnologias usadas

- Next.js
- React
- TypeScript
- CSS Modules
- Victory, para os gráficos
- Vercel, para o deploy

## Como rodar localmente

Depois de clonar o projeto, instale as dependências:

```bash
npm install
```

No estado atual do projeto, não é necessário configurar variáveis de ambiente.

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Depois é só abrir:

```bash
http://localhost:3000
```

## Aprendizados

Esse projeto foi uma boa oportunidade para praticar o uso do Next.js em uma aplicação com fluxo completo de usuário, indo além de páginas estáticas.

Um dos pontos mais importantes foi trabalhar com Server Actions. Elas foram usadas para lidar com ações como login, cadastro, logout, envio de fotos, comentários, recuperação de senha e exclusão de publicações. Isso ajudou bastante a entender como deixar parte da lógica no servidor, trabalhar com cookies de autenticação e manter os formulários mais integrados ao próprio Next.

Outro aprendizado importante foi a manipulação de uma API externa. O projeto precisa enviar dados em formatos diferentes, como `FormData` no upload de fotos, lidar com token nas requisições autenticadas, tratar erros de resposta e atualizar os dados da interface depois de algumas ações, como ao postar ou apagar uma foto.

Também deu para praticar rotas dinâmicas, páginas protegidas, componentes reutilizáveis, estados de carregamento, validações simples de formulário e gráficos para exibir as estatísticas das fotos.
