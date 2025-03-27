const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer').createPromptModule();

async function coletarArgumentos(script) {
    const caminhoConfig = path.join(__dirname, '../../scripts', script, 'config.json');
    
    if (!fs.existsSync(caminhoConfig)) {
        return []; // Se não houver config.json, retorna um array vazio
    }

    const conteudoConfig = fs.readFileSync(caminhoConfig, 'utf-8');
    const config = JSON.parse(conteudoConfig);
    const perguntas = [];
    
    if (config.argumentos) {
        for (const chave in config.argumentos) {
            perguntas.push({
                type: 'input',
                name: chave,
                message: config.argumentos[chave],
            });
        }
    }
    
    const respostas = await inquirer(perguntas);
    return Object.values(respostas).map(arg => arg.trim()).filter(arg => arg.length > 0);
}

module.exports = { coletarArgumentos };
