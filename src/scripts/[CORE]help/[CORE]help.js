console.log("HELP\n\nGuia Resumido de Uso da CLI\n\n"+
    "Essa CLI é dedicada a executar scripts JavaScript nativos. A seguir, um guia passo a passo para te ajudar a utilizar e criar seus scripts:\n\n"+
    "[ SCRIPT ]\n\nPara adicionar scripts personalizados, siga o padrão abaixo:\n"+
    "1. Os scripts devem ser armazenados no diretório ..\\src\\scripts.\n"+
    "2. Cada script deve residir em uma pasta com o mesmo nome do script.\n"+
    "3. Cada pasta de script deve conter um arquivo `config.json`, responsável por fornecer a descrição do script e definir os argumentos necessários para sua execução.\n"+
    "4. Se o script não precisar de argumentos, o objeto `argumentos` no `config.json` deve ser um objeto vazio `{}`.\n"+
    "5. Se o script precisar de argumentos, o objeto `argumentos` deve conter as variáveis que representam os argumentos necessários. Cada variável deve conter uma descrição do argumento, além de possíveis regras de inserção (ex: formatação de data).\n"+
    "6. Os valores das variáveis no objeto `argumentos` devem ser descrições claras de como o argumento deve ser fornecido (ex: 'Data de início no formato YYYY-MM-DD').\n"+
    "7. Para facilitar a validação e o entendimento, sempre que possível, forneça exemplos de inserção de dados no próprio arquivo `config.json`.\n\n"+
    "[ SCRIPT EXEMPLO - [CORE]exemplo ]\n\n"+
    "A CLI inclui um script nativo chamado [CORE]exemplo, que simula um script que recebe argumentos. Você pode utilizar esse script como referência para a estrutura do arquivo `config.json` e para ver como os argumentos são configurados.\n"+
    "Basta selecionar esse script na tela de seleção e conferir a estrutura do `config.json`.\n\n"+
    "[ O QUE É [CORE]? ]\n\n"+
    "Os scripts nativos da CLI possuem o prefixo [CORE], como por exemplo [CORE]exemplo e [CORE]help. Esses scripts servem como exemplo para a criação de novos scripts e como utilitários.\n"+
    "Sempre que precisar de um exemplo para começar, basta olhar esses scripts nativos. Eles estão localizados no diretório ..\\src\\scripts.\n\n"+
    "[ EXECUÇÃO ]\n\n"+
    "Após criar seu script conforme o padrão, ele aparecerá automaticamente na tela de seleção, onde você poderá escolher o script a ser executado.\n"+
    "Durante a execução, a CLI irá solicitar os argumentos definidos no `config.json` do script. Se os argumentos forem fornecidos corretamente, o script será executado.\n\n"+
    "Caso o script falhe ou haja algum erro, a CLI fornecerá mensagens de erro detalhadas, incluindo o motivo do erro e como corrigi-lo.\n"+
    "Lembre-se: a organização e a clareza nas descrições do `config.json` são fundamentais para garantir que os scripts funcionem corretamente.\n\n");
