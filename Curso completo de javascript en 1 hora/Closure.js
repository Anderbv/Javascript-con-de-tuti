// Closure

// Situacion tengo un scope global y la funcion suma 2
// Supongo que vivo en cuarto dentro de una edificio
// El edificio(entonces tengo la llave del edificio
// y la de mi cuarto) en este caso es el global scope y mi 
// cuarto es suma2(), entonces si yo quiero acceder a 
// mi cuarto tengo que primero tener la llave de mi
// edificio y luego tengo la llave de mi cuarto que es
// funcion2() pero yo no tengo llave del vecino
// al ingresar al edificio puedes ver los demás cuartos
// pero no puedo ingresar a ellos porque ellos tienen
// sus propios dueños que al igual que yo tiene una
// llave para el edificio y luego otra para ingresar
// a su cuarto pero no a la del vecino, yo puedo
// observar los demas cuartos eso si pero no acceder a
// ellos

const a = 1;
function suma() {
    const b = 2;
    return suma2();
}

const b = 3;
const c = 1;

function suma2() {
    const c = 3;
    return a + b + c;
}

<div></div>