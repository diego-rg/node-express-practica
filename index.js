const readline = require('readline');

const async = require("./async.js");
const event = require("./event.js");

const file = process.argv[2];

const rl = readline.createInterface({
    input: process.stdin,//Entrada de datos predefinida do pc
    output: process.stdout
});

rl.question(
    `Seleccione el método de lectura del fichero:
    1. para Asíncrono
    2. para Eventos`,
    value => {
        console.log(`Ha seleccionado ${value}\n\n`)

        switch (value) {
            case "1":
                async(file)
                break;
            case "2":
                event(file)
                break;
        }
        rl.close();
    }
);