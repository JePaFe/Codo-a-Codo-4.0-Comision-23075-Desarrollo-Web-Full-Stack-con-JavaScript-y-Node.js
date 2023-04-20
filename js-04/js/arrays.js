// const numeros = [6, true, "8", 4, 9, ["a", "b", "c"]];
const numeros = [6, 10, 8, 40, 9, 1];
const letras = ["a", "b", "c"];

const numeros_letras = letras.concat(numeros);
// console.log(numeros_letras.join(", "));

const nombres = "ana, Juan, Maria, pedro, Pedro, Ana";
const nombres_array = nombres.split(", ");
// console.log(nombres_array.slice(2, 4));

console.log(nombres_array.sort());

// function compare(a, b) {
//   if (a < b) {
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//   }
//   // a debe ser igual b
//   return 0;
// }

console.log(numeros.sort((a, b) => a - b));

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
months.splice(4, 1, "May");
months.splice(1, 2);

// console.log(months);

// ---

// console.log(numeros[3]); // 4
// console.log(numeros.at(2)); // 8

// console.log(numeros.length);

// numeros[5] = 51;
// numeros.push(61);
// numeros[numeros.length] = 71;

// numeros.unshift(-1);

// let num = numeros.pop();
// console.log(num);
