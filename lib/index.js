//Resultado de transpilación de nuestro ejemplo usando ES6 para compatibilidad con Node 2.5.0
"use strict";

//Probamos con este ejemplo (./node_modules/.bin/babel src --out-dir lib)
var myArrFunc = function myArrFunc(myVal) {
  return console.log(myVal);
};

myArrFunc("Probando Babel!!!");