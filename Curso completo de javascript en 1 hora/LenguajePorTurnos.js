/* 1- Javascript como lenguaje por turnos */

// Que quiere decir que javascript sea un lenguaje por turnos?
// Una de las cosas que tiene js es el lenguaje por el cual
// podemos comunicarnos con el browser, los browsers son nuestro
// lenguaje para que solamente el browser pueda llegar a enteder

const miNumero = 2; //line 1
let miNumero2 = 2
//Cada vez que nosotros hacemos una linea de codigo

//Javascript interpreta de la siguiente manera
function suma(param1, param2) {
  return param1 + param2;
}

console.log(suma(miNumero, 1));
//Cuanto demoro en hacer esto?
//Nothing

//Javascript es lo que se llama un lenguaje por turnos
//Que quiere decir esto?
//que es una maquina
//el browser es una maquina y entiende las cosas por partes
//no va a agarrar y a atender todo en el mismo segundo
//Es algo secuencial

//Entonces javascript lo que va ahacer es venir a la linea 1
//va a ejecutarla
//Aunque no lo creamos una variable se ejecuta
//bueno yo tengo una variable y ustedes dicen bueno
//en la variable miNumero yo estoy guardando el valor 2
//no, NO NO, NO
//Eso es una forma coloquial de decir okey mi referencia
//, mi referencia llamada miNumero y que es la referencia
//al espacio en memoria en el cual voy a guardar el valor 2

//que quiero decir con eso?
//cada vez que javascript ejecuta una linea genera un turno
//y dentro de ese turno va a ser la funcionalidad que nosotros
//le decimos

//en este caso esto es una funcionalidad
//const miNumero = 2; //line 1

//Nuevamente yo creo una referencia, una key a un espacio de memoria
//si por cafa vez que nosotros creamos una variable.
// En este caso estamos creando un lugarcito de memoria en cual guardar
// los valores y el cual vamos a acceder mediante la key miNumero
// Y dentro de ese espacio de memoria vamos a guardar el valor 2

//Hasta que no termine eso que acabamos de decir javascript
//no interrumpe su turno, no lo puede hacer.
//por eso se dice que es por turnos

/* 2 - IIFE (FUNCION AUTO INVOCADA)*/

/* 3 - HOISTING */

/* 3 - CURRYING */

/* 3 - ROUTING */

/* 3 - ROUTING (APLY CALL Y BIND)*/