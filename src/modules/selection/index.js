const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();

function listarScripts() {
    const dirPath = path.join(__dirname, '../../scripts'); // Diretório onde os scripts são armazenados
    try {
        const pastas = fs.readdirSync(dirPath);
        const scripts = [];

        pastas.forEach(pasta => {
            const scriptPath = path.join(dirPath, pasta, `${pasta}.js`); // Caminho para o script dentro da pasta
            if (fs.existsSync(scriptPath)) {
                scripts.push(pasta); 
            }
        });

        return scripts;
    } catch (err) {
        console.error('Erro ao ler os scripts:', err);
        return [];
    }
}

module.exports = { listarScripts };

async function escolherScript() {
    const scriptsDisponiveis = listarScripts();
    if (scriptsDisponiveis.length === 0) {
        console.log('Nenhum script disponível.');
        return null;
    }

    const resposta = await prompt([
        {
            type: 'list',
            name: 'scriptEscolhido',
            message: 'Escolha um script para executar:',
            choices: scriptsDisponiveis
        }
    ]);

    return resposta.scriptEscolhido;
}

module.exports = { escolherScript };
