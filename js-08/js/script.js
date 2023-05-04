const min = 100;
const max = 3000;

console.log("1");

setTimeout(() => {
  console.log("3");
}, Math.random() * (max - min) + min);

setTimeout(() => {
  console.log("4");
}, Math.random() * (max - min) + min);

console.log("2");

// ---

// let i = 1;

// const bucle = setInterval(() => {
//   console.log(i++);
// }, 1000);
