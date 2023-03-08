/* 3 - HOISTING */

console.log("esta es el valor de mi varible a ", a)

//porque el log() me esta tomando el a sin esta declarada despues
//osea que yo puedo utilizar cosas mientras esten definidas en algun lado?
//no importa el orden? SI y se llama hoisting

//Javascritp dice a bueno primera linea de codigo estoy es un log
//que voy a escribir, este string? ah perfecto y a?
//a no existe, sigo, SIGO nunca dije digo que no funciona
//SIGO
//que pasa si yo tengo mas cosas despues
//va a seguir ejecutando cada linea de codigo..

const b = 3;
const c = 2;
//.. cada linea, encontro a?
//ah fantastico
//ahora podemos logearlo, cuando js va a tirar un eror?
// cuando no se encuentre la definicion en ningun lado
const a = 1;