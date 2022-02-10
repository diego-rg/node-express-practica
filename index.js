const fs = require('fs');//librería de Node que permite leer fichero
const readline = require('readline');;//librería de Node que crea unha interfaz para a lectura de datos

const file = process.argv[2];/*Como process.argv devolve un array cos argumentos da liña de comandos: node index.js file: 
node é process.argv[0], index.js é process.argv[1] e file é process.argv[2].*/

let lines = 0;//Comezamos na línea 0

//Usamos readline para crear a interfaz. input será o nome do archivo
const rl = readline.createInterface({
    input: fs.createReadStream(file), //Usamos como input o archivo que lle mandamos e cramos o stream para leelo
});

/*creamos un evento line(evento que se emite canda vez que se detecta un salto de liña na input, neste caso no archivo en file) coa interfaz rl creada.
O evento contará os caracteres de cada línea. Ten como argumento line, que será cada línea, e aumentará por cda línea lines para contalas*/
rl.on("line", (line) => {
    ++lines;
    console.log(`Hay ${line.length} caracteres en la línea ${lines}.`);
});

//creamos o evento close que finalizará a inetrfaz e contará as líneas totales
rl.on("close", () => {
    console.log(`Hay un total de ${lines} líneas.`);
})

//O orden da igual xa que a interfaz executa antes line e despois close, anque poñamos antes close

//Podemos ejecutalo con  node index.js pruebaManejoEventos.txt na terminal
//Ou creamos un script start que transpile con babel primeiro (para facelo on fly hai que instalar @babel-register) e logo execute o archivo