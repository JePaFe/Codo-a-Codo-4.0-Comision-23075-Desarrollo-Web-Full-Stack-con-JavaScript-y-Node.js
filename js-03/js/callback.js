// const saludarConsole = function (nombre) {
//   console.log(`Hola ${nombre}`);
// };

// const saludarAlert = function (nombre) {
//   alert(`Hola ${nombre}`);
// };

// saludarConsole("Juan");
// saludarAlert("Juan");

// const saludar = function (nombre, callback) {
//   callback(`Hola ${nombre}`);
// };

// const saludar = (nombre, callback) => callback(`Hola ${nombre}`);

// saludar("Juan", console.log);
// saludar("Juan", alert);

// const CODIGO_SUMA = 1;

// const calculadora = (num1, num2, operacion) => {
//   // return num1 + num2;

//   let resultado;

//   //   switch (operacion) {
//   //     case "+":
//   //       resultado = num1 + num2;
//   //       break;
//   //     case "-":
//   //       resultado = num1 - num2;
//   //       break;
//   //   }

//   if (operacion == "+") {
//     resultado = num1 + num2;
//   } else if (operacion == "-") {
//     resultado = num1 + num2;
//   }

//   return resultado;
// };

// let resultado = calculadora(6, 5, '+');

const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;

const calculadora = (num1, num2, callback) => callback(num1, num2);
// const calculadoraCientifica = (num1, num2, callback) => callback(num1, num2);

let resultado = calculadora(6, 15, sumar);
// resultado = calculadora(9, 5, restar);

console.log(resultado);
