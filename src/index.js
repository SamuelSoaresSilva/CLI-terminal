const { escolherScript } = require('./modules/selection');
const { coletarArgumentos } = require('./modules/arguments');
const { executarScript } = require('./modules/execution');
const { continuarOuSair } = require('./utils/helpers');

async function recomecarOuSair() {
    const opcao = await continuarOuSair();
    if (opcao === 'continuar') {
        await iniciar();
    } else {
        console.clear()
        console.log("Finalizando processo...");
        process.exit();
    }
}

async function iniciar() {
    console.clear();
    const scriptSelecionado = await escolherScript();
    const argumentos = await coletarArgumentos(scriptSelecionado);
    await executarScript(scriptSelecionado, argumentos);
    await recomecarOuSair();
}

iniciar();
