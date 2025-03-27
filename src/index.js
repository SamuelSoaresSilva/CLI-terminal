const { escolherScript } = require('./modules/selection');
const { coletarArgumentos } = require('./modules/arguments');

async function iniciar() {
    console.clear();
    let argumentos = null
    const scriptSelecionado = await escolherScript();

    if (scriptSelecionado) {
        console.log(`Você selecionou o script: ${scriptSelecionado}`);
        argumentos = await coletarArgumentos()
        console.log(`Argumentos do script: ${argumentos}`)

        //fazer algo com o script selecionado, como executar o script ou mostrar detalhes
    } else {
        console.log('Nenhum script selecionado. Saindo...');
    }
}

iniciar();
