# CLI Interativa para Execução de Scripts .js

Esta é uma CLI para a execução de scripts JavaScript diretamente no terminal do Windows (CMD). A interface é projetada para ser simples, permitindo a execução de múltiplos scripts de maneira organizada e eficiente, sem a necessidade de interfaces gráficas complexas.

## Objetivo

A CLI permitirá:
- Selecionar e executar scripts JavaScript no terminal.
- Fornecer argumentos para os scripts.
- Exibir logs de execução em tempo real.

## Estrutura do Projeto

O projeto será modular e altamente escalável, permitindo a fácil adição de novas funcionalidades. A estrutura inicial será dividida nos seguintes módulos:

1. **Módulo de Seleção de Scripts**
    - Responsável por listar os scripts disponíveis e permitir a seleção interativa.
    - Utiliza `Inquirer.js` para navegação interativa com teclas de seta.
    - Deve permitir a adição e remoção de scripts facilmente.

2. **Módulo de Execução de Scripts**
    - Executa os scripts JavaScript com os argumentos fornecidos.
    - Usa `child_process.exec()` para rodar os scripts e capturar os logs.
    - Garante que os scripts sejam executados no diretório correto com as dependências carregadas.
    - Captura e exibe os logs de execução em tempo real.

3. **Módulo de Argumentos**
    - Permite que o usuário insira argumentos para os scripts.
    - Utiliza `Inquirer.js` para capturar os argumentos, com a possibilidade de editar ou excluir valores.
    - Verifica se os argumentos estão no formato correto antes de passar para a execução.

4. **Módulo de Interface**
    - Abriga métodos de interface de usuário

## Como rodar

#### 1. **Rodando via `node` diretamente (antes da configuração do `npm start`)**

Essa forma é válida se preferir rodar a CLI diretamente com o Node.js. Para executar o script, navegue até a raiz do projeto e execute o seguinte comando:

```bash
node src/index.js
```

#### 2. **Rodando via `npm start` (abordagem mais fácil)**

Você pode rodar a CLI de maneira mais simples com o comando `npm start`. Basta executar o seguinte comando na raiz do projeto:

```bash
npm start
```

#### 3. **Rodando a CLI Globalmente**

Para rodar a CLI globalmente, ou seja, poder executá-la a partir de qualquer diretório no seu sistema, siga os passos abaixo.

1. Adicione um comando global no `package.json`

Abra o arquivo `package.json` e adicione a seguinte configuração para permitir que o seu projeto seja executado globalmente. Na seção `"bin"`, adicione o comando que você quer usar globalmente.

```json
"bin": {
  "cli": "./src/index.js"
}
```

2. Instale a `CLI` globalmente
Para instalar a `CLI` globalmente no seu sistema, execute o seguinte comando na raiz do projeto:

```bash
npm install -g
```

Esse comando vai linkar o seu projeto globalmente, tornando o comando `cli` disponível em qualquer lugar no seu `terminal`.

3. Execute a `CLI` globalmente
Agora, você pode executar a `CLI` de qualquer lugar no seu sistema, `sem precisar estar na pasta do projeto`. Para rodar a `CLI`, basta executar o comando:

```bash
cli
```

Isso iniciará a `CLI` e permitirá que você interaja com o sistema de execução de scripts.

## Como Contribuir

1. Faça um fork deste repositório.
2. Crie uma branch com sua feature ou correção (`git checkout -b feature/nova-feature`).
3. Comite suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`).
4. Envie para a branch principal (`git push origin feature/nova-feature`).
5. Abra um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

