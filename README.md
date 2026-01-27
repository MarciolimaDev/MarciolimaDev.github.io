# Cioli Portfolio

Bem-vindo ao repositório do **Cioli Portfolio**, um portfólio moderno e interativo desenvolvido para apresentar projetos, habilidades e informações profissionais de um Desenvolvedor Fullstack.

O projeto apresenta um design com tema espacial (dark mode) e utiliza tecnologias modernas para criar uma experiência de usuário fluida e atraente.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

-   **[Next.js 14](https://nextjs.org/)**: Framework React para produção, utilizado para estruturação do app e roteamento.
-   **[React](https://react.dev/)**: Biblioteca JavaScript para construção de interfaces de usuário.
-   **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática.
-   **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utilitário para estilização rápida e responsiva.
-   **[Framer Motion](https://www.framer.com/motion/)**: Biblioteca para animações fluidas e complexas.
-   **[Three.js](https://threejs.org/)** / **[@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)**: Para renderização de elementos 3D (ex: fundo de estrelas e buraco negro).

## 🎨 Design e Cores

O design original foi adaptado para refletir a identidade visual da marca **Cioli**, utilizando uma paleta de cores baseada em tons de azul e ciano sobre um fundo escuro espacial.

-   **Cor Primária**: `#2493FA` (Azul Brilhante)
-   **Cor Secundária**: `#165CAD` (Azul Escuro)
-   **Fundo**: `#04101F` (Azul Quase Preto / Espacial)

## 🛠️ Como Executar o Projeto

Siga os passos abaixo para rodar o projeto em sua máquina local:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/MarciolimaDev/MarciolimaDev.github.io.git
    cd MarciolimaDev.github.io
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```

4.  **Acesse o projeto:**
    Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📦 Deploy (GitHub Pages)

Este projeto está configurado para deploy estático no **GitHub Pages**.

-   O comando `npm run build` gera os arquivos estáticos na pasta `out/`.
-   As configurações de exportação (`output: 'export'`) e desativação de otimização de imagem estão no `next.config.js`.

Para realizar o deploy:
1.  Faça o push das alterações para a branch `main`.
2.  No GitHub, vá em **Settings > Pages**.
3.  Configure a fonte para **GitHub Actions** (recomendado para Next.js) ou deploy a partir de uma branch.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
