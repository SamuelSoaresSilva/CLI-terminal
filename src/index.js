const { escolherScript } = require('./modules/selection');
const { coletarArgumentos } = require('./modules/arguments');
const { executarScript } = require('./modules/execution');
const { continuarOuSair, clearTerminal } = require('./utils/helpers');

async function recomecarOuSair() {
    const opcao = await continuarOuSair();
    if (opcao === 'continuar') {
        await iniciar();
    } else {
        clearTerminal();
        process.exit();
    }
}

async function iniciar() {
    const scriptSelecionado = await escolherScript();
    const argumentos = await coletarArgumentos(scriptSelecionado);
    await executarScript(scriptSelecionado, argumentos);
    await recomecarOuSair();
}

iniciar();
