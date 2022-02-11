const fs = require('fs');

const file = process.argv[2];

//creamos un evento para ler o archivo e coller o contido
fs.readFile(file, (err, content) => {
    if(err) {
        return console.log(err);
    }

    //Si éxito, pasamos os datos a string e dividímolos nun array por cada salto de línea ("/n")
    const lines = content.toString().split("/n");

    for (let line of lines) {
        console.log(`Hay ${line.length} caracteres.`);
    }

    console.log(`Hay un total de ${lines.length} líneas en el fichero ${file}`);
})

//Non se executará a nosa función ata que se termine de cargar o file