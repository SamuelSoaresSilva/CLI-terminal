const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer').createPromptModule();

async function coletarArgumentos() {
    const resposta = await inquirer([
        {
            type: 'input',
            name: 'argumentos',
            message: 'Digite os argumentos para o script (separados por espaço):',
        }
    ]);
    
    return resposta.argumentos ? resposta.argumentos.split(' ') : [];
}

module.exports = { coletarArgumentos };