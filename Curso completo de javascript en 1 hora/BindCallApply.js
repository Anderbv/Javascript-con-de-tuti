// Apply, Call y Bind

const gentlemanProgramer = {
  name: 'Gentleman',
  age: 20,
  gentlemanInformation: function() {
    return 'Hi my name is: ' + this.name + ' and this is my age: ' + this.age;
    //A que hace referencia la this 
    //Al contexto de mi funcion, en este caso el contexto de
    //esta funcion es lo que esta adentro de este scope + 
    //esto que esta afuera, name and age
  }
}

const gentlemanProgramer2 = {
  name: 'Gentleman Older',
  age: 30,
}
// estamos diciendo lo siguiente, yo quiero reutilizar la funcion gentlemanInformation que esta
// contenida dentro de gentlemanProgramer y la quiero llamar con este contexto => gentlemanProgramer2

// Que estamos diciendo?
// Ahora cuando esto => gentlemanInformation ejecute no va a utilizar con el contexto de gentlemanProgramer
// si no que va a utilizar el contexto de gentlemanProgramer2

//tambine podemos hacer esto

function gentlemanInformationExterior () {
  if(this !== globalThis) {
    return 'Hi my name is: ' + this.name + ' and this is my age: ' + this.age + " and i'm being called from the outside"; 
  }
  return new Error('You cant call this function without giving it a context');
}


// console.log(gentlemanInformationExterior.call(gentlemanProgramer)) //yes
// console.log(gentlemanInformationExterior()) //error

//Esta es una muy buena forma cuando nosotros ya sabemos cuando vamos a trabajar con objetos que tienen cierta propiedades
//para poder aplicar para que el que llame a esta funcion va a ser este objeto .call(este)

/* APPLY es parecido a call */

const gentlemanInformationExteriorApply = function (sex) {
  return 'Hi my name is: ' + this.name + ' and this is my age: ' + this.age + " and i'm being called from the outside" + ' and im a: ' + sex; 
}

console.log(gentlemanInformationExteriorApply.apply(gentlemanProgramer, ['Unisex']));

//Para que nos sevira esto, cuando nosotros queramos aplicar un contexto pero quieren sumarle un detallito más osea una parameter


/* BIND */

const gentlemanInformationExteriorBind = function () {
  return 'Hi my name is: ' + this.name + ' and this is my age: ' + this.age + " and i'm being called from the outside"; 
}

//Yo quisiera poder bindear la funcionalidad de uno a otro contexto a uno diferente

const myNewFunctionWithScope = gentlemanProgramer.gentlemanInformation.bind(gentlemanProgramer2)

//Estamos bindeando una funcionalidad a un contexto, es decir que la funcionalidad adquiere el contexto de gentlemanProgramer2
//y ejecute la funcion con esos valores

// lo que esta diciendo es myNewFunctionWithScope es una funcion igualita a gentlemanInformation pero va a tener asignado
// este scope => gentlemanProgramer2


function x(name) {
  return function y(lastName) {
    return function w(age) {
      return `My name is ${name} ${lastName} and ${age}`
    }
  }
}

function callX() {
  return x('Anderson')
}

console.log(callX('Jesus')('Rodriguez')(19))

