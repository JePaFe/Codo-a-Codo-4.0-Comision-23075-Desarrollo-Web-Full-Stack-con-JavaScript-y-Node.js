const numeros = [6, 10, 8, 8, 40, 9, 1];

function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  // a debe ser igual b
  return 0;
}

// function compare(a, b) {
//   return a - b;
// }

console.log(numeros.sort(compare));

console.log(numeros.sort((a, b) => a - b));
