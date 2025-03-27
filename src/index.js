const { escolherScript } = require('./modules/selection');

async function iniciar() {
    console.clear();

    const scriptSelecionado = await escolherScript();

    if (scriptSelecionado) {
        console.log(`Você selecionou o script: ${scriptSelecionado}`);
        //fazer algo com o script selecionado, como executar o script ou mostrar detalhes
    } else {
        console.log('Nenhum script selecionado. Saindo...');
    }
}

iniciar();
