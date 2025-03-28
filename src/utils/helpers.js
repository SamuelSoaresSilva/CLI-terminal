const inquirer = require('inquirer').createPromptModule();

async function continuarOuSair() {
    const resposta = await inquirer([
        {
            type: 'list',
            name: 'opcao',
            message: 'Você deseja executar outro script ou sair da CLI?',
            choices: [
                { name: 'Executar outro script', value: 'continuar' },
                { name: 'Sair da CLI', value: 'sair' },
            ],
        }
    ]);

    return resposta.opcao;
}

module.exports = { continuarOuSair };