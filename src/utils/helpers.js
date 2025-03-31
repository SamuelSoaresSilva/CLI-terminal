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

function clearTerminal() {
    console.log('\u001b[H\u001b[2J'); // ANSI cls
    console.log('\u001b[3J') // Limpar buffer de rolagem
  } 

module.exports = { continuarOuSair, clearTerminal };