//Versión con programación orientada a eventos
const fs = require('fs');
const readline = require('readline');

module.exports.file = process.argv[2];

let lines = 0;

const rl = readline.createInterface({
    input: fs.createReadStream(file),
});

rl.on("line", (line) => {
    ++lines;
    console.log(`Hay ${line.length} caracteres en la línea ${lines}.`);
});

rl.on("close", () => {
    console.log(`Hay un total de ${lines} líneas en el fichero ${file}`);
})