const numeros = [5, 10, 8, 40, 10, 9, 1, 40];

const numbers = numeros.map((numero) => (numero == 5 ? "cinco" : numero));
// console.log(numeros, numbers);

const numeros_filtrados = numeros.filter((numero) => numero >= 10);
// console.log(numeros, numeros_filtrados);

const numero = numeros.find((numero) => numero >= 10);
console.log(numeros, numero);

// ---

// for (let i = 0; i < numeros.length; i++) {
//   console.log(numeros[i]);
// }

// function mostrar(numero) {
//   console.log(numero);
// }

// numeros.forEach((numero, i) => console.log(i, numero));

// const todos = numeros.every((numero) => numero > 30);
// console.log(todos);

// const algunos = numeros.some((numero) => numero > 30);
// console.log(algunos);
