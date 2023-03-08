/* 2 - IIFE (FUNCION AUTO INVOCADA)*/

(function() {
    console.log("pepe")
}) //Cundo js llegue a este punto
//ejecuta la funcion, la ejecuta
//Eso es lo que se llama autoinvocado

//Automaticamente ve esto y lo ejecuta
//Generalmente como lo hariamos?

function notify() {
    return "pepe"
}

console.log(notify());

//Cuando vamos a utilizar funciones autoinvocadas?

//Practicamente vamos a utilizar funciones autoinvocadas
// cuando 1 - no tengamos un padre para llamar a nuestra funcion
// 2 - Cuando es codigo que se ejecuta solamente una vez que no importa que
//sea reutilizable