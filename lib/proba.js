"use strict";

//Probamos con este ejemplo usando la terminal (./node_modules/.bin/babel src --out-dir lib)
var myArrFunc = function myArrFunc(myVal) {
  return console.log(myVal);
};

myArrFunc("Probando Babel!!!");