//Versión asíncrona
const fs = require('fs');
const readline = require('readline');

export default file => {
    console.log("Asíncrono");
}

fs.readFile(file, (err, content) => {
    if(err) {
        return console.log(err);
    }

    const lines = content.toString().split("/n");

    for (let line of lines) {
        console.log(`Hay ${line.length} caracteres.`);
    }

    console.log(`Hay un total de ${lines.length} líneas en el fichero ${file}`);
})