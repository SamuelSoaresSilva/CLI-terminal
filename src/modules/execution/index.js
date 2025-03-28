const { exec } = require('child_process');
const path = require('path');

const ANSI_RESET = "\x1b[0m";
const ANSI_BLUE = "\x1b[34m";
const ANSI_GRAY = "\x1b[90m";
const ANSI_GREEN = "\x1b[32m";
const ANSI_RED = "\x1b[31m";

async function executarScript(script, argumentos) {
    return new Promise((resolve, reject) => {
        const scriptPath = path.join(__dirname, '../../scripts', script, `${script}.js`);
        const comando = `node "${scriptPath}" ${argumentos.join(' ')}`;
        
        console.log(`\n🔹 ${ANSI_BLUE}Executando:${ANSI_RESET} ${ANSI_GRAY}${comando}${ANSI_RESET}\n`);

        const processo = exec(comando);

        processo.stdout.on('data', (data) => {
            const timestamp = new Date().toLocaleTimeString();
            console.log(`${ANSI_GREEN}[${timestamp}]${ANSI_RESET} ${data.trim()}`);
        });

        processo.stderr.on('data', (data) => {
            const timestamp = new Date().toLocaleTimeString();
            console.log(`${ANSI_RED}[${timestamp}]${ANSI_RESET} ${data.trim()}`);
        });

        processo.on('exit', (code) => {
            if (code === 0) {
                console.log(`\n${ANSI_GREEN}√${ANSI_RESET} ${ANSI_BLUE}${script}${ANSI_RESET} finalizado\n`);
                resolve();
            } else {
                console.log(`\n${ANSI_RED}x${ANSI_RESET} ${ANSI_BLUE}${script}${ANSI_RESET} falhou com código ${code}\n`);
                reject(new Error(`Script ${ANSI_BLUE}${script}${ANSI_RESET} falhou com código ${code}`));
            }
        });
    });
}

module.exports = { executarScript };
