const { escolherScript } = require('./modules/selection');
const { coletarArgumentos } = require('./modules/arguments');
const { executarScript } = require('./modules/execution');

async function iniciar() {
    console.clear();
    const scriptSelecionado = await escolherScript();
    const argumentos = await coletarArgumentos(scriptSelecionado)
    
        //fazer algo com o script selecionado, como executar o script ou mostrar detalhes
    await executarScript(scriptSelecionado, argumentos)
}

iniciar();
