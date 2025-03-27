const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer').createPromptModule();
const { showTittle } = require('../interface');

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

async function exibirDescricao(script) {
    const caminhoDescricao = path.join(__dirname,'../../scripts', script, 'descricao.txt');
    if (fs.existsSync(caminhoDescricao)) {
        const descricao = fs.readFileSync(caminhoDescricao, 'utf-8');
        console.log(`\nDescrição: ${descricao}\n`);
    } else {
        console.log("\nDescrição não disponível.\n");
    }
}

async function escolherScript() {
    const scriptsDisponiveis = listarScripts();
    if (scriptsDisponiveis.length === 0) {
        console.log('Nenhum script disponível.');
        return null;
    }

    let scriptEscolhido;
    let descricaoExibida = false;

    while (true) {
        console.clear()
        showTittle()
        const resposta = await inquirer([
            {
                type: 'list',
                name: 'scriptEscolhido',
                message: 'Escolha um script para executar:',
                choices: scriptsDisponiveis,
            }
        ]);

        scriptEscolhido = resposta.scriptEscolhido;

            await exibirDescricao(scriptEscolhido);
            descricaoExibida = true;
        

        const confirmacao = await inquirer([
            {
                type: 'confirm',
                name: 'confirmarExecucao',
                message: `Você deseja executar o script ${scriptEscolhido}?`,
                default: false,
            }
        ]);

        if (confirmacao.confirmarExecucao) {
            return scriptEscolhido;
        }
    }
}

module.exports = { escolherScript };
