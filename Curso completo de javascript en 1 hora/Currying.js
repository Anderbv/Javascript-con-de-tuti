// Currying

function sayHi(name, lastName, age) {
  console.log("hi " + name + " " + lastName + " " + "with age: " + age);
}

sayHi("Gentleman", "Programing", 18);

function sayHiCurried(name) {
  return function (lastName) {
    return function (age) {
      console.log("hi " + name + " " + lastName + " " + "with age: " + age);
    };
  };
}
// Como es que esto esta funcionando
// Estamos utilizando el resultado y el parametro del padre en una funcion del hijo
// esa es la principal idea 


sayHiCurried("Gentleman")("Proraming")(18);

// Cuando utilizaremos esto?
// Cuando necesitemos que el parametro del padre se utilice dentro de una funcionalidad del hijo

function iknowItsYouGentlemanPrograming() {
  return sayHiCurried('Gentleman')
} //esto es lo que se llama una funcion parcial
// en esta funcion parcial vamos a agarrar el sayHiCurried y vamos
// a retornar su resultado pero esto no queda aca, Por que?
//porque a esto se le esta agregando tambien estos dos ("Programing")(18)
// como parametros

//Una funcion parcial se va a utilizar cuando nosotros quieren que uno de sus valores
// que nosotros estamos incluyendo sea default, cuando queramos que el valor que
// vamos a utilizar ahi sea unico

console.log(iknowItsYouGentlemanPrograming()("Programing")(18));





