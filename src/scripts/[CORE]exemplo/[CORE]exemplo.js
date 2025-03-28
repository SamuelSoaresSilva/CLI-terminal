const argumentos = process.argv.slice(2); 

console.log("Argumentos recebidos: ", argumentos);


let contador = 0;
const palavras = ["Log 1", "Log 2", "Log 3", "Log 4", "Log 5"];

const intervalo = setInterval(() => {
  console.log(palavras[contador]);
  contador++;

  if (contador === palavras.length) {
    clearInterval(intervalo); 
  }
}, 2000); 
