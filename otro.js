// En la venta de boletos para ingresar a un
// partido de fútbol, el Tech Leader de tu equipo te asigna la responsabilidad de crear y
// asignar valor a un conjunto de variables. Recordá tener presente el tipo de dato que
// contienen.nombre, edad, celular, si es socio

var readline = require("readline-sync");
let nomb = readline.question("Ingresa tu nombre: ");

let edad = readline.question("Ingresa tu edad: ");
let celular = readline.question("Ingresa tu numero de celular: ");
let afiliacion = readline.question("eres afiliado: ");
console.log("su nombre es: " +  nomb);
console.log("su edad es: " +  edad);
console.log("su numero de celular es: " +  celular);
console.log("Eres socio: " +  afiliacion);


