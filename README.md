# CLI Leve e Interativa para Execução de Scripts JavaScript

Esta é uma CLI leve e interativa para a execução de scripts JavaScript diretamente no terminal do Windows (CMD). A interface é projetada para ser simples, porém poderosa, permitindo a execução de múltiplos scripts de maneira organizada e eficiente, sem a necessidade de interfaces gráficas complexas.

## Objetivo

A CLI permitirá:
- Selecionar e executar scripts JavaScript no terminal.
- Fornecer argumentos para os scripts.
- Exibir logs de execução em tempo real.
- Acompanhar o progresso da execução.

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

4. **Módulo de Logs e Progresso**
    - Exibe os logs gerados pelo script durante a execução.
    - Implementa uma barra de progresso usando `ora` ou `progress` para mostrar o andamento da execução.
    - Mostra a saída em tempo real, com possibilidade de destacar erros e mensagens importantes.

5. **Módulo de Interface**
    - Coordena todos os módulos e gerencia a interação do usuário com a CLI.
    - Exibe um painel de legendas com os comandos disponíveis para navegação e controle.
    - Facilita a integração de novos módulos à medida que a CLI cresce.

## Etapas de Desenvolvimento

### 1. **Planejamento**
- Definir as funcionalidades principais e a arquitetura geral do sistema.
- Planejar a estrutura modular para garantir escalabilidade e manutenção a longo prazo.

### 2. **Implementação do Módulo de Seleção de Scripts**
- Criar a lógica para listar scripts disponíveis.
- Implementar navegação interativa com teclas de seta (usando `Inquirer.js`).
- Testar com um conjunto de scripts fictícios para garantir a navegação correta.

### 3. **Implementação do Módulo de Execução de Scripts**
- Usar `child_process.exec()` para rodar scripts no terminal.
- Garantir que os logs sejam capturados em tempo real.
- Testar com scripts simples e verificar se os logs aparecem corretamente.

### 4. **Implementação do Módulo de Argumentos**
- Implementar captura e validação de argumentos com `Inquirer.js`.
- Adicionar suporte para modificação e exclusão de argumentos.
- Testar com diferentes tipos de entrada para garantir que os argumentos sejam passados corretamente para os scripts.

### 5. **Implementação do Módulo de Logs e Progresso**
- Implementar a exibição de logs de execução em tempo real.
- Adicionar barra de progresso utilizando `ora` ou `progress`.
- Testar a captura e exibição de logs durante a execução de scripts.

### 6. **Implementação do Módulo de Interface**
- Integrar todos os módulos criados.
- Criar a interface geral, incluindo um painel de legendas e comandos de navegação.
- Testar a interação completa da CLI, garantindo uma experiência intuitiva e fluida para o usuário.

### 7. **Testes e Validação**
- Realizar testes com diferentes scripts e argumentos.
- Validar a exibição dos logs, a execução dos scripts e a navegação entre opções.
- Verificar a escalabilidade e a facilidade de adicionar novos scripts e funcionalidades.

### 8. **Documentação e Refinamento**
- Escrever documentação adicional sobre como adicionar novos scripts e funcionalidades à CLI.
- Refinar a interface e corrigir quaisquer problemas identificados nos testes.
- Garantir que a CLI esteja pronta para uso em ambientes de produção.

## Como Contribuir

1. Faça um fork deste repositório.
2. Crie uma branch com sua feature ou correção (`git checkout -b feature/nova-feature`).
3. Comite suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`).
4. Envie para a branch principal (`git push origin feature/nova-feature`).
5. Abra um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.



## Diretórios

```
cli-scripts/
│
├── src/                       # Código fonte da CLI
│   ├── modules/               # Módulos principais da CLI
│   │   ├── selection/         # Módulo de Seleção de Scripts
│   │   │   └── index.js       # Lógica de seleção de script
│   │   ├── execution/         # Módulo de Execução de Scripts
│   │   │   └── index.js       # Lógica de execução do script
│   │   ├── arguments/         # Módulo de Argumentos
│   │   │   └── index.js       # Lógica para captura de argumentos
│   │   ├── logsProgress/      # Módulo de Logs e Progresso
│   │   │   └── index.js       # Lógica de logs e exibição de progresso
│   │   └── interface/         # Módulo principal da interface
│   │       └── index.js       # Lógica da interface interativa
│   │
│   ├── config/                # Configurações globais
│   │   └── config.js          # Arquivo de configurações
│   │
│   ├── utils/                 # Funções auxiliares
│   │   └── helpers.js         # Funções utilitárias (ex: validação, formatação)
│   │
│   └── index.js               # Ponto de entrada da aplicação
│
├── node_modules/              # Dependências do projeto (gerenciado pelo npm)
│
├── package.json               # Arquivo de configuração do npm
├── package-lock.json          # Arquivo de bloqueio de dependências
├── README.md                  # Documentação do projeto
└── .gitignore                 # Arquivo de configuração do Git
```


